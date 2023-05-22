import { BsArrowRightShort } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import model4 from "../../images/model-4.png";
import model5 from "../../images/model-5.jpg";
import { useInView } from "react-intersection-observer";

const Section4 = () => {
  const navigate = useNavigate();
  const { ref, inView } = useInView({ triggerOnce: true });
  return (
    <div className="padding-1 padding-2 pr-4 md:pr-0 grid md:grid-cols-2 gap-16">
      <div className="flex flex-col h-full justify-center gap-8  max-w-lg">
        <div className="space-y-2">
          <h1 className="text-4xl font-light">
            Lorem Ipsum is simply dummy text of the printing{" "}
          </h1>
          <p className="uppercase text-primary">Lorem Ipsum</p>
        </div>
        <p className="text-muted text-base">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a
        </p>
        <button
          className="btn btn-primary max-w-[9.25rem]"
          onClick={() => {
            navigate("/models");
          }}
        >
          Book Model <BsArrowRightShort size={"1.75rem"} />
        </button>
      </div>

      <div className="flex gap-8 md:gap-12">
        <div
          ref={ref}
          className={`${inView && "animate-heightZeroToFull"} overflow-hidden`}
        >
          <img src={model4} alt="" />
        </div>
        <div
          ref={ref}
          className={`${inView && "animate-heightZeroToFull"} overflow-hidden`}
        >
          <img src={model5} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Section4;
