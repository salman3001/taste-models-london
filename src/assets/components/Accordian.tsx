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
    <div className="w-full border-b border-[#21272D] py-8 space-y-6">
      <div
        className="flex items-center justify-between"
        onClick={() => {
          setOpen((state) => !state);
        }}
      >
        <p className="text-xl">{prop.title}</p>
        <div className=" flex h-8 w-8">
          {open ? <img src={minus} alt="" /> : <img src={plus} alt="" />}
        </div>
      </div>
      {open && (
        <p className="text-[#7E8283] text-lg sm:max-w-[80%]">{prop.detail}</p>
      )}
    </div>
  );
};

export default Accordian;
