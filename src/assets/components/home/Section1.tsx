import { memo, useEffect, useState } from "react";
import girl1 from "../../images/girl-slide-1.png";
import girl2 from "../../images/girl-slide-2.png";
import girl3 from "../../images/girl-slide-3.png";
import SelectInput from "../../components/SelectInput";
import { useFormik } from "formik";
import * as Yup from "yup";
import { BsArrowRightShort } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Section1 = () => {
  const [step, setStep] = useState(girl1);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((state) => {
        if (state === girl1) {
          return girl2;
        }
        if (state === girl2) {
          return girl3;
        } else {
          return girl1;
        }
      });
    }, 6000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="relative h-[70vh] sm:h-[90vh] w-full  text-white">
      <div className="absolute z-20 padding-1 padding-2 text-5xl w-full h-full flex flex-col justify-end pb-8 sm:pb-28 gap-10">
        <h1 className="max-w-lg font-medium">
          Lorem Ipsum is simply dummy text
        </h1>
        <p className="max-w-lg text-lg">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <Form />
      </div>
      <div className="overflow-hidden">
        <div
          className="h-[70vh]  sm:h-[90vh] w-full bg-cover bg-no-repeat brightness-[.3]  scaleInOut"
          style={{
            backgroundImage: `url(${step})`,
            backgroundPosition: "center",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Section1;

const Form = memo(() => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      modelType: "",
      nationality: "",
      service: "",
      language: "",
    },
    validationSchema: Yup.object({
      modelType: Yup.string().min(1, "required").required("Required"),
      nationality: Yup.string().required("Required"),
      service: Yup.string().required("Required"),
      language: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      if (!formik.isValid) {
        alert("All Fields are required");
      } else {
        navigate({
          pathname: "/models",
          search: `modelType=${values.modelType}&nationality=${values.nationality}&service=${values.service}&languange=${values.language}`,
        });
      }
    },
  });

  useEffect(() => {
    formik.validateForm();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(formik.isValid);
  console.log(formik.errors);

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-4 w-full gap-10 uppercase">
        <SelectInput
          setField={formik.setFieldValue}
          value={formik.values.modelType}
          placeholder="Model Type"
          name="modelType"
          options={[
            "Model 1",
            "Model 2",
            "Model 3",
            "Model 4",
            "Model 5",
            "Model 6",
            "Model 7",
          ]}
          tabindex={0}
        />
        <SelectInput
          setField={formik.setFieldValue}
          value={formik.values.nationality}
          name="nationality"
          placeholder="Nationality"
          options={[
            "American",
            "Russian",
            "France",
            "British",
            "Spanish",
            "Indian",
            "Middle East",
          ]}
          tabindex={0}
        />
        <SelectInput
          setField={formik.setFieldValue}
          value={formik.values.service}
          name="service"
          placeholder="Service Type"
          options={[
            "Service 1",
            "Service 2",
            "Service 3",
            "Service 4",
            "Service 5",
          ]}
          tabindex={0}
        />
        <SelectInput
          setField={formik.setFieldValue}
          value={formik.values.language}
          name="language"
          placeholder="Language"
          options={[
            "Language 1",
            "Language 2",
            "Language 3",
            "Language 4",
            "Language 5",
          ]}
          tabindex={0}
        />
      </div>
      <div className="flex w-full justify-end min-h-[4rem]">
        <button
          className={`btn  btn-primary w-full sm:w-48 self-end transition-opacity duration-1000 ${
            formik.isValid ? "flex opacity-100 " : "opacity-0 hidden"
          } `}
          onClick={() => {
            formik.handleSubmit();
          }}
        >
          Find Models <BsArrowRightShort size={"1.75rem"} />
        </button>
      </div>
    </>
  );
});
