import Appbar from "../components/Appbar";
import BlogCard from "../components/BlogCard";
import { BlogSkeleton } from "../components/BlogSkleton";
import { useblogApi } from "../hooks/useblogApi";
import { capitalize } from "../utils/capitalize";

const Blogs = () => {
  const { loading, blogs } = useblogApi();
  if (loading) {
    return (
      <div>
        <Appbar />
        <div className="flex justify-center">
          <div>
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <Appbar />
      <div className="p-4 flex justify-center ">
        <div className="max-w-3xl w-[100%]">
          {blogs?.map((blog) => {
            return (
              <BlogCard
                key={blog?.id}
                id={blog?.id}
                authorName={blog?.author?.name || "Anonymous"}
                title={capitalize(blog?.title)}
                content={blog?.content}
                publishedDate={"April6, 2024"}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
