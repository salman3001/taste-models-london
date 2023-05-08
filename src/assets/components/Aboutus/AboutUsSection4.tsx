import { BsArrowRightShort } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import model4 from "../../images/model-4.png";
import { useInView } from "react-intersection-observer";

const AboutUsSection4 = () => {
  const navigate = useNavigate();
  const { ref, inView } = useInView({ triggerOnce: true });
  return (
    <div className="padding-1 padding-2 pl-4 md:pl-0 grid md:grid-cols-2 gap-8 bg-base2">
      <div className="">
        <div
          ref={ref}
          className={`${
            inView && "animate-heightZeroToFull"
          } max-h-[700px] max-w-[700px] w-full  aspect-square`}
          style={{
            background: `url(${model4})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        ></div>
      </div>
      <div className="flex flex-col h-full place-self-center justify-center gap-8  max-w-lg">
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
    </div>
  );
};

export default AboutUsSection4;
