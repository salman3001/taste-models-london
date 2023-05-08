import { BsArrowRightShort } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import model6 from "../../images/model-6.jpg";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const AboutusSection6 = () => {
  const navigate = useNavigate();
  const { ref, inView } = useInView({ triggerOnce: true });
  return (
    <div className="padding-1 padding-2 pr-4 md:pr-0 grid md:grid-cols-2 gap-8 bg-base2">
      <div className="flex flex-col h-full justify-center place-self-start item gap-8  max-w-lg">
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
        <div className="flex gap-16">
          <div className="space-y-2">
            <Number start={inView} />
            <p className="text-muted ">Lorem Ipsum</p>
          </div>
          <div className="space-y-2">
            <Number start={inView} />
            <p className="text-muted ">Lorem Ipsum</p>
          </div>
        </div>
      </div>
      <div className="">
        <div
          ref={ref}
          className={`${
            inView && "animate-heightZeroToFull"
          } max-h-[700px] max-w-[700px] w-full bg-no-repeat  aspect-square`}
          style={{
            background: `url(${model6})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        ></div>
      </div>
    </div>
  );
};

export default AboutusSection6;

interface InumberProp {
  start?: boolean;
}

const Number = ({ start }: InumberProp) => {
  const [number, setNumber] = useState(5);

  useEffect(() => {
    setTimeout(() => {
      setNumber(8);
    }, 200);
    setTimeout(() => {
      setNumber(11);
    }, 400);
    setTimeout(() => {
      setNumber(14);
    }, 600);
    setTimeout(() => {
      setNumber(17);
    }, 800);
    setTimeout(() => {
      setNumber(21);
    }, 1000);
  }, [start]);

  return <h1 className="text-7xl font-semibold">{number}+</h1>;
};
