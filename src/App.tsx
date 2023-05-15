import { Routes, Route } from "react-router-dom";
import Layout from "./assets/components/Layout";
import Home from "./assets/pages/Home";
import { NotFound } from "./assets/pages/NotFound";
import Aboutus from "./assets/pages/Aboutus";
import Faq from "./assets/pages/Faq";
import Models from "./assets/pages/Models";
import ModelDetail from "./assets/pages/ModelDetail";
import Blogs from "./assets/pages/Blogs";
import BlogsDetail from "./assets/pages/BlogsDetail";
import Joinus from "./assets/pages/Joinus";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/joinus" element={<Joinus />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:blogId" element={<BlogsDetail />} />
        <Route path="/models" element={<Models />} />
        <Route path="/models/:modelId" element={<ModelDetail />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
export default App;
