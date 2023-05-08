import { memo, useState } from "react";
import ModelCard from "../components/ModelCard";
import SelectInput from "../components/SelectInput";
import model1 from "../images/model-1.png";
import model2 from "../images/model-2.png";
import model3 from "../images/model-3.png";

const Models = () => {
  return (
    <div className="z-20 padding-1 padding-2">
      <div className=" text-5xl w-full h-full flex flex-col justify-end  gap-10">
        <h1 className="max-w-lg ">Lorem Ipsum is simply dummy text</h1>
        <p className="max-w-lg text-lg">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <div className="w-full  lg:w-[80%] 2xl:w-[70%] self-end">
          <Form />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
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

const Form = memo(() => {
  const [modelType, setModelType] = useState("");
  const [nationality, setNationality] = useState("");
  const [service, setService] = useState("");
  const [language, setLanguage] = useState("");

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 w-full gap-10">
      <SelectInput
        tabindex={0}
        value={modelType}
        onChange={setModelType}
        placeholder="Model Type"
        options={["Model1", "Model2", "Model3"]}
      />
      <SelectInput
        tabindex={0}
        value={nationality}
        onChange={setNationality}
        placeholder={"Nationality"}
        options={["American", "Russian", "France"]}
      />
      <SelectInput
        tabindex={0}
        value={service}
        onChange={setService}
        placeholder={"Service"}
        options={["Modeling", "Photoshoot", "Videoshoot"]}
      />
      <SelectInput
        tabindex={0}
        value={language}
        onChange={setLanguage}
        placeholder={"Language Spoken"}
        options={["English", "Russian", "French"]}
      />
    </div>
  );
});
