import { Hono } from "hono";
import { userRouter } from "./routes/user";
import { blogRouter } from "./routes/blog";

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

app.route("/api/v1/user", userRouter);
app.route("/api/v1/blog", blogRouter);

export default app;

// postgres://postgres.upwbrxqqtgvquzvscxre:Mediumclone@742@aws-0-ap-south-1.pooler.supabase.com:5432/postgres
//DATABASE_URL="prisma://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiOGMxOGYwZGUtOTkzMC00OTY5LWI3MGItMTVlNzI4YzQxNzc2IiwidGVuYW50X2lkIjoiOWRjOGJmNjdjMzZmYWEzZTY4YjdmMWQ0ZmU2YTIwMjVmNDRmNGE0OGY0Y2RlMGFiZmE3MDg2OWViNWI0MzU2MCIsImludGVybmFsX3NlY3JldCI6IjNlZGNjZDExLWU0OWUtNGY0ZS05MmU3LTlkMjVjYTNiYTBkMCJ9.zbPRpEUaYZQLs0gV23zAbu3oE7sBRzumKd7K8HN4iMc"