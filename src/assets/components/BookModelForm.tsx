import { BsArrowRightShort, BsCheck2Square } from "react-icons/bs";
import DateInput from "./DateInput";
import FormInput from "./FormInput";
import SelectInput from "./SelectInput";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { togelModalState } from "../../Redux/modalSlice";

const BookModelForm = () => {
  const [success, setSuccess] = useState(false);

  const togelSuccess = () => {
    setSuccess((state) => !state);
  };

  useEffect(() => {
    setSuccess(false);
  }, []);

  return (
    <div className=" px-4 sm:px-8 md:px-16 py-16">
      {success ? <SuccessMessage /> : <Form setSuccess={togelSuccess} />}
    </div>
  );
};

export default BookModelForm;

const Form = (prop: { setSuccess: () => void }) => {
  const dispatch = useDispatch();

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
      console.log(values);
      formik.resetForm();
      prop.setSuccess();
    },
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <div className="space-y-8 ">
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
              error={Boolean(formik.errors.date)}
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
            error={formik.touched.duration && Boolean(formik.errors.duration)}
          />
        </div>
        <div className="">
          <FormInput
            label="Special Request"
            type="text"
            name="request"
            value={formik.values.request}
            onChange={formik.handleChange}
            error={formik.touched.request && Boolean(formik.errors.request)}
          />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row w-full gap-8">
        <button
          className="btn border w-full hover:bg-primary self-end transition-opacity duration-1000 text-white text-xl"
          onClick={() => {
            dispatch(togelModalState("bookModelForm"));
            formik.resetForm();
          }}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="btn  btn-primary w-full  self-end transition-opacity duration-1000 text-white text-xl"
          onClick={(e) => {
            e.preventDefault();
            formik.handleSubmit();
          }}
        >
          {`Book ${formik.values.model} Now`}
          <BsArrowRightShort size={"1.75rem"} />
        </button>
      </div>
    </div>
  );
};

const SuccessMessage = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center gap-8">
      <div>
        <BsCheck2Square size={100} color="#BFA37C" />
      </div>
      <h1 className="text-4xl text-white text-center">Success</h1>
      <p className="text-center max-w-xs">
        Your Model has been booked Successfully. Our model will contact you
        shortly
      </p>
      <button
        type="submit"
        className="btn  btn-primary w-full  self-end transition-opacity duration-1000 text-white"
        onClick={() => {
          dispatch(togelModalState("bookModelForm"));
        }}
      >
        Go Back
        <BsArrowRightShort size={"1.75rem"} />
      </button>
    </div>
  );
};
