import { Dispatch, useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { memo } from "react";
import { FormikErrors } from "formik/dist/types";

interface Iprop {
  placeholder: string;
  options: string[];
  value?: string | null;
  tabindex: number;
  setField: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) =>
    | Promise<void>
    | Promise<
        FormikErrors<{
          modelType: string;
          nationality: string;
          service: string;
          language: string;
        }>
      >;
}

// eslint-disable-next-line react-refresh/only-export-components
const SelectInput = (prop: Iprop) => {
  const [state, setState] = useState(false);
  console.log(prop.value);

  return (
<<<<<<< HEAD
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
=======
    <div className="relative border-b ">
      <select
        name={prop.name}
        id=""
        className=" w-full h-full appearance-none bg-transparent p-2 pr-6 text-lg uppercase [&>option]:bg-base1 [&>option]:p-4 "
        placeholder="model type"
        value={prop.value}
        onChange={prop.onchange}
>>>>>>> 38a2ce6f09e8af035760c8df617fdc89cfa134c4
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
        } absolute w-full   bg-base1 overflow-hidden  z-10 opacity-90  transition-all duration-300 max-h-48 overflow-y-scroll`}
        style={{
          scrollbarColor: "red yellow",
        }}
      >
        {prop.options.map((option, index) => (
          <li
            key={index}
            className="cursor-pointer hover:text-primary p-2 border-b"
            onClick={(e) => {
              prop.setField("modelType", option);
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
