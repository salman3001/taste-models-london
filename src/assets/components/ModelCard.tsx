import logo from "../images/Brand-logo.svg";
import { BsArrowRightShort } from "react-icons/bs";
import Rating from "./Rating";
import { useNavigate } from "react-router-dom";

interface Iprop {
  name: string;
  rating: number;
  detail: string;
  img: string;
}

const ModelCard = (prop: Iprop) => {
  const navigate = useNavigate();
  return (
    <div className="relative group h-full w-full space-y-4 ">
      <div
        className=" relative min-h-[20rem] bg-no-repeat bg-cover aspect-[1/1.3] "
        style={{
          backgroundImage: `url(${prop.img})`,
        }}
      >
        <div className="bg-black w-full h-full opacity-0 hover:opacity-90 absolute top-0 left-0 transition-opacity duration-1000 p-10  space-y-6">
          <div className="max-w-xs flex flex-col h-full mx-auto  justify-evenly">
            <div className="space-y-2 ">
              <h1 className="text-lg translate-y-6 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-1000">
                {prop.name}
              </h1>
              <p className="text-sm leading-5 translate-y-6 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-1000 delay-200">
                {prop.detail}
              </p>
            </div>
            <button
              className="btn btn-primary w-full translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-1000 delay-400"
              onClick={() => {
                navigate("/models/modeldetail");
              }}
            >
              Book Model
              <BsArrowRightShort size={"1.75rem"} />
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center w-full items-center gap-2">
        <p className="text-xl">{prop.name}</p>
        <Rating rating={prop.rating} />
      </div>
      <div className="absolute group-hover:opacity-0 bottom-28 fadeIn flex justify-center w-full transition-opacity duration-300 ">
        <img src={logo} alt="" className="w-[50%]" />
      </div>
    </div>
  );
};

export default ModelCard;
