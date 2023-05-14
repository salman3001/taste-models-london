import ModelCard from "../components/ModelCard";
import SelectInput from "../components/SelectInput";
import model1 from "../images/model-1.png";
import model2 from "../images/model-2.png";
import model3 from "../images/model-3.png";
import { useFormik } from "formik";
import * as Yup from "yup";

const Models = () => {
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
  return (
    <div className="z-20 padding-1 padding-2">
      <div className=" text-5xl w-full h-full flex flex-col justify-end  gap-10 pb-4">
        <h1 className="max-w-lg ">Lorem Ipsum is simply dummy text</h1>
        <p className="max-w-lg text-lg">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <div className="w-full">
          <div className="grid grid-cols-2 sm:grid-cols-4 w-full gap-10">
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
        </div>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14 py-10 ">
        <ModelCard
          img={model1}
          name="Lara"
          detail="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
"
          rating={5}
        />
        <ModelCard
          img={model2}
          name="Bella"
          detail="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
"
          rating={5}
        />
        <ModelCard
          img={model3}
          name="Lara"
          detail="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
"
          rating={5}
        />
        <ModelCard
          img={model1}
          name="Lara"
          detail="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
"
          rating={5}
        />
        <ModelCard
          img={model2}
          name="Bella"
          detail="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
"
          rating={5}
        />
        <ModelCard
          img={model3}
          name="Lara"
          detail="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
"
          rating={5}
        />
        <ModelCard
          img={model1}
          name="Lara"
          detail="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
"
          rating={5}
        />
        <ModelCard
          img={model2}
          name="Bella"
          detail="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
"
          rating={5}
        />
        <ModelCard
          img={model3}
          name="Lara"
          detail="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
"
          rating={5}
        />
        <ModelCard
          img={model1}
          name="Lara"
          detail="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
"
          rating={5}
        />
        <ModelCard
          img={model2}
          name="Bella"
          detail="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
"
          rating={5}
        />
        <ModelCard
          img={model3}
          name="Lara"
          detail="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
"
          rating={5}
        />
        <ModelCard
          img={model1}
          name="Lara"
          detail="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
"
          rating={5}
        />
        <ModelCard
          img={model2}
          name="Bella"
          detail="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
"
          rating={5}
        />
        <ModelCard
          img={model3}
          name="Lara"
          detail="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
"
          rating={5}
        />
        <ModelCard
          img={model1}
          name="Lara"
          detail="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
"
          rating={5}
        />
        <ModelCard
          img={model2}
          name="Bella"
          detail="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
"
          rating={5}
        />
        <ModelCard
          img={model3}
          name="Lara"
          detail="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
"
          rating={5}
        />
      </div>
    </div>
  );
};

export default Models;
