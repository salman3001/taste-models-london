import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { memo } from "react";

interface Iprop {
  placeholder: string;
  name: string;
  options: string[];
  value?: string | null;
  tabindex: number;
  border?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setField: any;
  error?: boolean;
}

// eslint-disable-next-line react-refresh/only-export-components
const SelectInput = (prop: Iprop) => {
  const [state, setState] = useState(false);

  return (
    <div
      className={`relative text-base w-full ${
        prop.error && "border-red-500 border"
      }`}
      tabIndex={prop.tabindex}
      onBlur={() => {
        setState(false);
      }}
    >
      <div
        className={`h-11 border-b ${prop.border} cursor-pointer p-2.5`}
        onClick={() => {
          setState((state) => !state);
        }}
      >
        {prop.value === undefined
          ? prop.placeholder
          : prop.value == ""
          ? prop.placeholder
          : prop.value}
      </div>
      <div className={`absolute right-0 bottom-3`}>
        <BsChevronDown />
      </div>
      <ul
        className={`${
          state ? "h-auto px-2 py-4 " : "h-0"
        } absolute w-full top-12  bg-[#080A0A] overflow-hidden  z-10   transition-[hieght] duration-300 max-h-52 overflow-y-scroll scroll-mr-10`}
      >
        {prop.options.map((option, index) => (
          <li
            key={index}
            className="cursor-pointer hover:bg-primary p-2 border-b border-[#21272D] text-white"
            onClick={() => {
              prop.setField(prop.name, option);
              setState((state) => !state);
            }}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default memo(SelectInput);
