// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { useState, useEffect } from "react";
import Datepicker from "tailwind-datepicker-react";
import { HiArrowNarrowRight, HiArrowNarrowLeft } from "react-icons/hi";

const options = {
  title: "Date of Booking",
  autoHide: true,
  todayBtn: true,
  clearBtn: true,
  maxDate: new Date("2050-01-01"),
  minDate: Date.now(),
  theme: {
    background: "bg-base1  ",
    todayBtn:
      "h-8 bg-primary text-white ring-0 focus:ring-0 hover:ring-0 hover:bg-primary border-none ",
    clearBtn:
      "h-8 bg-primary text-white ring-0 focus:ring-0 hover:ring-0 hover:bg-primary border-none ",
    icons:
      " rounded-sm p-2 bg-transparent hover:bg-primary ring-0 focus:ring-0 text-white hover:text-white",
    text: "bg-base1 text-white hover:bg-primary rounded-sm",
    disabledText: "hover:bg-primary rounded-sm",
    input:
      "bg-transparent text-[#7E8283] border-none text-base  p-2.5 focus:ring-0 w-full",
    inputIcon: "hidden",
    selected: "bg-primary",
  },
  icons: {
    // () => ReactElement | JSX.Element
    prev: () => (
      <span>
        <HiArrowNarrowLeft />
      </span>
    ),
    next: () => (
      <span>
        <HiArrowNarrowRight />
      </span>
    ),
  },
  datepickerClassNames: "top-1/2 -translate-y-1/2 sm:top-8",
  language: "en",
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const DateInput = (prop: { setFiedValue: any; error?: boolean }) => {
  const [show, setShow] = useState(false);
  const handleChange = (selectedDate: Date) => {
    prop.setFiedValue("date", selectedDate);
  };
  const handleClose = (state: boolean) => {
    setShow(state);
  };

  useEffect(() => {
    handleChange();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={`sm:relative ${
        prop.error ? "border-red-500 border" : "border-b border-[#21272D]"
      } w-full`}
    >
      <Datepicker
        options={options}
        onChange={handleChange}
        show={show}
        setShow={handleClose}
      />
    </div>
  );
};

export default DateInput;
