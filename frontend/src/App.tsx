import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog";
import Auth from "./pages/Auth";
import Blogs from "./pages/Blogs";
import Publish from "./pages/Publish";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Auth type="signup" />} />
          {/* <Route path="/signup" element={<Auth type="signup" />} /> */}
          <Route path="/signin" element={<Auth type="signin" />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/publish" element={<Publish />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
