import { Link } from "react-router-dom";

interface BlogCardProps {
  id: number;
  title: string;
  content: string;
  authorName: string;
  publishedDate: string;
}

const BlogCard = ({
  id,
  title,
  content,
  authorName,
  publishedDate,
}: BlogCardProps) => {
  return (
    <Link to={`/blog/${id}`}>
      <div className="border-b-[1px] border-slate-400 pb-6 pt-4 cursor-pointer">
        <div className="flex items-center ">
          <div className="flex flex-col justify-center text-xs">
            <Avatar name={authorName} />
          </div>
          <div className="font-light pl-2">{authorName}</div>

          <div className="text-slate-500 pl-2 flex items-center font-light">
            {" "}
            <span className="text-[4px] mr-1">&#9679;</span>
            {publishedDate}
          </div>
        </div>
        <div className="text-2xl font-bold mt-2">{title}</div>
        <div className="text-md font-light ">
          {content.slice(0, 200) + "..."}
        </div>
        <div className="mt-4 text-slate-400 font-light">
          {" "}
          {`${Math.ceil(content.length / 100)} min read`}{" "}
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;

export function Avatar({
  name,
  size = "small",
}: {
  name: string;
  size?: "small" | "big";
}) {
  return (
    <div
      className={`relative inline-flex items-center justify-center ${
        size === "small" ? "w-7 h-7" : "w-10 h-10"
      } overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}
    >
      <span
        className={`font-medium ${
          size === "small" ? "text-xs" : "text-base"
        }  text-gray-600 dark:text-gray-300`}
      >
        {name[0]?.toUpperCase()}
      </span>
    </div>
  );
}
