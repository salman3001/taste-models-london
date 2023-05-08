import BlogCard from "../components/BlogCard";
import arrowRight from "../images/arrow-right.svg";
import ArrowLeft from "../images/arrow-left.svg";
const Blogs = () => {
  return (
    <>
      <div className="padding-1 padding-2 grid  sm:grid-cols-2 lg:grid-cols-3 gap-6 place-content-center">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
      <div className=" padding-1 flex justify-center items-center gap-12  mt-8 md:mt-0 mb-12">
        <div>
          <img src={ArrowLeft} alt="" className="cursor-pointer" />
        </div>
        <p className="text-2xl">1/10</p>
        <div>
          <img src={arrowRight} alt="" className="cursor-pointer" />
        </div>
      </div>
    </>
  );
};

export default Blogs;
