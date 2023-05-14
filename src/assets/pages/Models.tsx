import ModelCard from "../components/ModelCard";
import SelectInput from "../components/SelectInput";
import model1 from "../images/model-1.png";
import model2 from "../images/model-2.png";
import model3 from "../images/model-3.png";

const Models = () => {
  return (
    <div className="z-20 padding-1 padding-2">
      <div className=" text-5xl w-full h-full flex flex-col justify-end  gap-10 pb-4">
        <h1 className="max-w-lg ">Lorem Ipsum is simply dummy text</h1>
        <p className="max-w-lg text-lg">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <div className="w-full  lg:w-[90%] 2xl:w-[80%] self-end">
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
