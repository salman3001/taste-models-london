import { Dispatch, useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { memo } from "react";

interface Iprop {
  name: string;
  placeholder: string;
  option: { title: string; value: string }[];
  value?: string;
  onchange?: () => void;
}

// eslint-disable-next-line react-refresh/only-export-components
const SelectInput = (prop: Iprop) => {
  return (
    <div className="relative border-b ">
      <select
        name={prop.name}
        id=""
        className=" w-full h-full appearance-none bg-transparent p-2 pr-6 text-lg uppercase [&>option]:bg-base1 [&>option]:p-4 "
        placeholder="model type"
        value={prop.value}
        onChange={prop.onchange}
      >
        <option value={""} disabled selected>
          {prop.placeholder}
        </option>
        {prop.option.map((option) => (
          <option value={option.value}>{option.title}</option>
        ))}
      </select>
      <div className="absolute right-0 top-1/2 -translate-y-1/2">
        <BsChevronDown size={25} />
      </div>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default memo(SelectInput);
