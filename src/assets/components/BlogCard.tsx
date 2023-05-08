import blogimg from "../images/blog-img.png";
import { useNavigate } from "react-router-dom";

const BlogCard = () => {
  const navigate = useNavigate();
  return (
    <div
      className="w-full max-w-sm space-y-3 cursor-pointer"
      onClick={() => {
        navigate("/blogs/blogdetail");
      }}
    >
      <div>
        <img src={blogimg} alt="" />
      </div>
      <p className="uppercase text-primary">Lorem Ipsum</p>
      <p className="text-3xl ">
        Lorem Ipsum is simply dummy text simply dummy text
      </p>
      <p className="max-w-[20rem]">
        At vero eos et accusamus et iusto odio dignissimos ducimus qui
        blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
        et quas molestias excepturi sint occaecati cupiditate non provident
      </p>
    </div>
  );
};

export default BlogCard;
