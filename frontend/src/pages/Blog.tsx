import { useParams } from "react-router-dom";
import { useBlog } from "../hooks/useblogApi";
import Fullblog from "../components/Fullblog";
import Appbar from "../components/Appbar";
import { Spinner } from "../components/Spinner";

const Blog = () => {
  const { id } = useParams();
  const { loading, blog } = useBlog({
    id: id || "",
  });

  if (loading || !blog) {
    return (
      <div>
        <Appbar />

        <div className="h-screen flex flex-col relative top-[15rem]">
          <div className="flex justify-center">
            <Spinner />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <Fullblog blog={blog} />
    </div>
  );
};

export default Blog;
