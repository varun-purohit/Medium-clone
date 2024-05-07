import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { verify } from "hono/jwt";
import { createBlogInput, updateBlogInput } from "blog-project_medium-common";

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
}>();

blogRouter.use("/*", async (c, next) => {
  const authHeader = c.req.header("authorization") || "";
  const user = await verify(authHeader, c.env.JWT_SECRET);

  try {
    if (user) {
      c.set("userId", user.id);
      await next();
    } else {
      c.status(403);
      return c.json({
        message: "you are not logged in",
      });
    }
  } catch (error) {
    c.status(403);
    return c.json({
      message: "you are not logged in",
    });
  }
});

// CREATE BLOG
blogRouter.post("/", async (c) => {
  const body = await c.req.json();
  const authorId = c.get("userId");
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const { success } = createBlogInput.safeParse(body);
  if (!success) {
    c.status(411);
    return c.json({
      message: "Blog Inputs are not correct",
    });
  }

  try {
    const blog = await prisma.blog.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: Number(authorId),
      },
    });

    return c.json({
      id: blog.id,
    });
  } catch (error) {
    c.status(403);
    c.json({
      message: "Blog not created",
    });
  }
});

//UPDATE BLOG
blogRouter.put("/", async (c) => {
  const body = await c.req.json();

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const { success } = updateBlogInput.safeParse(body);
  if (!success) {
    c.status(411);
    return c.json({
      message: "Update Blog Inputs are not correct",
    });
  }

  try {
    const blog = await prisma.blog.update({
      where: {
        id: body.id,
      },
      data: {
        title: body.title,
        content: body.content,
      },
    });

    return c.json({
      id: blog.id,
    });
  } catch (error) {
    c.status(403);
    c.json({
      message: "Blog not Updated",
    });
  }
});

// ALL BLOGS
blogRouter.get("/bulk", async (c) => {
  console.log("hello");

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const blogs = await prisma.blog.findMany({
    select: {
      content: true,
      id: true,
      title: true,
      author: {
        select: {
          name: true,
        },
      },
    },
  });

  return c.json({
    blogs,
  });
});

//SPECIFIC BLOG
blogRouter.get("/:id", async (c) => {
  const id = c.req.param("id");
  console.log(id);

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const blog = await prisma.blog.findFirst({
      where: {
        id: Number(id),
      },
      select: {
        content: true,
        id: true,
        title: true,
        author: {
          select: {
            name: true,
          },
        },
      },
    });

    console.log(blog);

    return c.json({
      id: blog,
    });
  } catch (error) {
    c.status(403);
    c.json({
      message: "Error while fetching blogpost",
    });
  }
});
