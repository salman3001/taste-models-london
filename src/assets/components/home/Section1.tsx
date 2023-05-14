import { memo, useEffect, useState } from "react";
import girl1 from "../../images/girl-slide-1.png";
import girl2 from "../../images/girl-slide-2.png";
import girl3 from "../../images/girl-slide-3.png";
import SelectInput from "../../components/SelectInput";
import { useFormik } from "formik";
import * as Yup from "yup";

const Section1 = () => {
  const [step, setStep] = useState(girl1);
  const formik = useFormik({
    initialValues: {
      modelType: "",
      nationality: "",
      service: "",
      language: "",
    },
    validationSchema: Yup.object({
      modelType: Yup.string().required("Required"),
      nationality: Yup.string().required("Required"),
      service: Yup.string().required("Required"),
      language: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      alert(
        values.language + values.modelType + values.nationality + values.service
      );
    },
  });

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
      <div className="absolute z-20 padding-1 padding-2 text-5xl w-full h-full flex flex-col justify-end pb-16 sm:pb-32 2xl:pb-48 gap-10">
        <h1 className="max-w-lg font-medium">
          Lorem Ipsum is simply dummy text
        </h1>
        <p className="max-w-lg text-lg">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 w-full gap-10">
          <SelectInput
            setField={formik.setFieldValue}
            value={formik.values.modelType}
            placeholder="Model Type"
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
          {/* <SelectInput
            option={[
              { title: "American", value: "American" },
              { title: "French", value: "French" },
              { title: "Canadian", value: "Canadian" },
            ]}
            name="Nationality"
            placeholder="Nationality"
          />
          <SelectInput
            option={[
              { title: "Modeling", value: "Modeling" },
              { title: "Photo Shoot", value: "Photoshoot" },
              { title: "Video Shoot", value: "Videoshoot" },
            ]}
            name="Service"
            placeholder="Service"
          />
          <SelectInput
            option={[
              { title: "English", value: "English" },
              { title: "French", value: "French" },
              { title: "Russian", value: "Russian" },
            ]}
            name="language"
            placeholder="Language Spoken"
          /> */}
        </div>
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
