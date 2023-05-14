import blogimg from "../images/blog-img.png";
import { useNavigate } from "react-router-dom";

const BlogCard = () => {
  const navigate = useNavigate();
  return (
    <div
      className="w-full  space-y-3 cursor-pointer"
      onClick={() => {
        navigate("/blogs/blogdetail");
      }}
    >
      <div className="flex">
        <img src={blogimg} alt="" className="w-full" />
      </div>
      <p className="uppercase text-primary">Lorem Ipsum</p>
      <p className="text-3xl ">Lorem Ipsum is simply dummy text</p>
      <p className="">
        At vero eos et accusamus et iusto odio dignissimos ducimus qui
        blanditiis praesentium voluptatum deleniti atque corrupti quos
      </p>
    </div>
  );
};

export default BlogCard;
