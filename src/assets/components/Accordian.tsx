import { useState } from "react";
import minus from "../images/minus.svg";
import plus from "../images/plus.svg";

interface Iprop {
  title: string;
  detail: string;
}

const Accordian = (prop: Iprop) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full border-b border-[#21272D]   space-y-6 overflow-hidden">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => {
          setOpen((state) => !state);
        }}
      >
        <p className="text-xl">{prop.title}</p>
        <div className=" flex h-6 w-6">
          {open ? <img src={minus} alt="" /> : <img src={plus} alt="" />}
        </div>
      </div>

      <p
        className={`text-[#7E8283] text-lg sm:max-w-[80%] transition-all duration-300  ${
          open ? "h-auto pb-4" : "h-0"
        }`}
      >
        {prop.detail}
      </p>
    </div>
  );
};

export default Accordian;
