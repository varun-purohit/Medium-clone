import { Blog } from "../hooks/useblogApi";
// import { capitalize } from "../utils/capitalize";
import Appbar from "./Appbar";
import { Avatar } from "./BlogCard";

const Fullblog = ({ blog }: { blog: Blog }) => {
  // console.log(blog?.author || "heman");

  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div className="grid grid-cols-12 px-20 mt-10 w-full max-w-screen-xl">
          <div className="col-span-8 ">
            <div className="font-extrabold text-3xl">{blog?.title}</div>
            <div className="font-normal text-xl mt-2">{blog?.content}</div>
          </div>

          <div className="col-span-4">
            <span className="text-slate-700">Author</span>
            <div className="flex w-full ">
              <div className="mr-2 flex items-center">
                <Avatar size="small" name={blog?.author?.name || "Anonymous"} />
              </div>
              <div>
                <div className="font-bold text-2xl">
                  {blog?.author?.name || "Anonymous"}
                </div>
                <div className="mt-2 text-slate-500">
                  Random catch phrase to catch the user's attention
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fullblog;
