import { BsArrowRightShort } from "react-icons/bs";
import DateInput from "./DateInput";
import FormInput from "./FormInput";
import SelectInput from "./SelectInput";
import { RxCross2 } from "react-icons/rx";
import { useFormik } from "formik";
import * as Yup from "yup";

const BookModelBox = (prop: { state: boolean; togelHandler: () => void }) => {
  const formik = useFormik({
    initialValues: {
      model: "Caroline",
      name: "",
      phone: "",
      date: "",
      time: "",
      duration: "",
      request: "",
    },
    validationSchema: Yup.object({
      model: Yup.string().required("Required"),
      name: Yup.string().required("Required"),
      phone: Yup.number().required("Required"),
      date: Yup.string().required("Required"),
      time: Yup.string().required("Required"),
      duration: Yup.string().required("Required"),
      request: Yup.string(),
    }),
    onSubmit: (values) => {
      alert(
        `${values.date} + ${values.duration} + ${values.model} +${values.name} + ${values.phone} + ${values.request} + ${values.time}`
      );
    },
  });

  console.log(formik.values);

  return (
    <>
      {prop.state && (
        <div
          className="fixed  flex top-0 left-0 w-screen h-screen bg-black bg-opacity-80 z-[500] justify-center items-center padding-1 padding-2 text-[#7E8283]  "
          onClick={() => {
            prop.togelHandler();
          }}
        >
          <div
            className="relative bg-base2 px-4 sm:px-8 md:px-16 py-16  flex flex-col justify-center space-y-8 h-min overflow-y-scroll  w-full max-w-6xl"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className="w-full flex flex-col items-center gap-8">
              <h1 className="text-4xl text-white text-center">Book Model</h1>
              <p className="text-center w-full max-w-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div className="flex flex-col gap-10">
              <div>
                <SelectInput
                  border="border-[#21272D]"
                  name="model"
                  placeholder="Model"
                  options={[
                    "Caroline",
                    "Bella",
                    "Bella",
                    "Lara",
                    "Caroline",
                    "Lara",
                    "Caroline",
                  ]}
                  tabindex={0}
                  value={formik.values.model}
                  setField={formik.setFieldValue}
                  error={formik.touched.model && Boolean(formik.errors.model)}
                />
              </div>
              <div className="flex gap-4 w-full">
                <FormInput
                  label="Name"
                  type="text"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                />
                <FormInput
                  label="Phone"
                  type="number"
                  name="phone"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  error={formik.touched.phone && Boolean(formik.errors.phone)}
                />
              </div>
              <div className="gap-4 w-full grid   grid-cols-2 sm:grid-cols-3">
                <div className="col-span-2 sm:col-span-1">
                  <DateInput
                    setFiedValue={formik.setFieldValue}
                    error={formik.touched.date && Boolean(formik.errors.date)}
                  />
                </div>
                <FormInput
                  label="Time of Booking"
                  type="text"
                  name="time"
                  value={formik.values.time}
                  onChange={formik.handleChange}
                  error={formik.touched.time && Boolean(formik.errors.time)}
                />
                <SelectInput
                  border="border-[#21272D]"
                  name="duration"
                  placeholder="Duration"
                  options={["2hrs", "4hrs", "12hrs", "24hrs", "3 days"]}
                  tabindex={0}
                  value={formik.values.duration}
                  setField={formik.setFieldValue}
                  error={
                    formik.touched.duration && Boolean(formik.errors.duration)
                  }
                />
              </div>
              <div className="">
                <FormInput
                  label="Special Request"
                  type="text"
                  name="request"
                  value={formik.values.request}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.request && Boolean(formik.errors.request)
                  }
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row w-full gap-8">
              <button
                className="btn border w-full hover:bg-primary self-end transition-opacity duration-1000 text-white "
                onClick={prop.togelHandler}
              >
                Cancel
              </button>
              <button
                className="btn  btn-primary w-full  self-end transition-opacity duration-1000 text-white"
                onClick={() => {
                  formik.handleSubmit();
                }}
              >
                {`Book ${formik.values.model} Now`}
                <BsArrowRightShort size={"1.75rem"} />
              </button>
            </div>
            {/* close button */}
            <div
              className="absolute -top-4 right-2 cursor-pointer"
              onClick={prop.togelHandler}
            >
              <RxCross2 color="white" size={25} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BookModelBox;
