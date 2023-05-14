import fb from "../../images/fb.svg";
import pintrest from "../../images/pintrest.svg";
import insta from "../../images/insta.svg";

const BlogsDetailSection1 = () => {
  return (
    <div className="padding-1 padding-2 grid sm:grid-cols-4 gap-6 pb-16">
      <div className="col-span-3 space-y-3">
        <p className="text-primary uppercase">Lorem Ipsum</p>
        <h1 className="text-5xl max-w-3xl font-bold">
          Lorem Ipsum is simply dummy text simply dummy text
        </h1>
      </div>
      <div className="space-y-3 col-span-1 flex flex-col justify-end">
        <p className="text-[0.8rem]">Follow us</p>
        <div className="flex gap-6">
          <a href="">
            <img src={fb} alt="" className="h-6" />
          </a>
          <a href="">
            <img src={pintrest} alt="" className="h-6" />
          </a>
          <a href="">
            <img src={insta} alt="" className="h-6" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogsDetailSection1;
