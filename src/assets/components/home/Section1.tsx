import { memo, useEffect, useState } from "react";
import girl1 from "../../images/girl-slide-1.png";
import girl2 from "../../images/girl-slide-2.png";
import girl3 from "../../images/girl-slide-3.png";
import SelectInput from "../../components/SelectInput";

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
    <div className="relative h-[70vh] sm:h-[90vh] w-full overflow-hidden text-white">
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
            option={[
              { title: "Model 1", value: "model1" },
              { title: "Model 2", value: "model2" },
              { title: "Model 3", value: "model3" },
            ]}
            name="ModelType"
            placeholder="Model Type"
          />
          <SelectInput
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
          />
        </div>
      </div>
      <div
        className="h-[70vh]  sm:h-[90vh] w-full bg-cover bg-no-repeat brightness-[.3]  scaleInOut"
        style={{
          backgroundImage: `url(${step})`,
          backgroundPosition: "center",
        }}
      ></div>
    </div>
  );
};

export default Section1;
