import { Dispatch, useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { memo } from "react";

interface Iprop {
  placeholder: string;
  options: string[];
  value?: string | null;
  tabindex: number;
  onChange: Dispatch<React.SetStateAction<string>>;
}

// eslint-disable-next-line react-refresh/only-export-components
const SelectInput = (prop: Iprop) => {
  const [state, setState] = useState(false);
  console.log(prop.value);

  return (
    <div
      className="relative text-base w-full uppercase"
      tabIndex={prop.tabindex}
      onBlur={() => {
        setState(false);
      }}
    >
      <div
        className="h-12   border-b  cursor-pointer p-3 mb-1 "
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
      <div className=" absolute right-0 bottom-3">
        <BsChevronDown />
      </div>
      <ul
        className={`${
          state ? "h-auto p-2 border" : "h-0"
        } absolute w-full   bg-base1 overflow-hidden  z-10 opacity-90  transition-all duration-300`}
      >
        {prop.options.map((option, index) => (
          <li
            key={index}
            className="cursor-pointer hover:text-primary"
            onClick={(e) => {
              prop.onChange(e.currentTarget.innerHTML);
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
