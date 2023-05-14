import { BsArrowRightShort } from "react-icons/bs";
import model4 from "../../images/model-4.png";
import model6 from "../../images/model-6.jpg";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

export const Section5 = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div className="padding-1 padding-2 pl-4 md:pl-0 grid md:grid-cols-2 gap-16 bg-base1">
      <div className="flex gap-8 md:gap-12">
        <div
          ref={ref}
          className={`${inView && "animate-heightZeroToFull"} overflow-hidden`}
        >
          <img src={model4} alt="" />
        </div>
        <div
          ref={ref}
          className={`${
            inView && "animate-heightZeroToFull"
          } overflow-hidden delay-500`}
        >
          <img src={model6} alt="" />
        </div>
      </div>
      <div className="flex flex-col h-full justify-center place-self-end item gap-8  max-w-lg">
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
    </div>
  );
};

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
