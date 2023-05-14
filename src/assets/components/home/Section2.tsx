import headphone from "../../images/headphone.png";
import ModelCard from "../ModelCard";
import model1 from "../../images/model-1.png";
import model2 from "../../images/model-2.png";
import model3 from "../../images/model-3.png";

const Section2 = () => {
  return (
    <div className="padding-1 padding-2 space-y-20">
      <div className="grid sm:grid-cols-2 gap-6 lg:gap-20 xl:gap-32">
        <h1 className="text-4xl  max-w-[35rem]">
          Lorem Ipsum is simply dummy text of the printing text of the printing
        </h1>
        <div className="flex flex-col gap-8 ">
          <p className="leading-8 text-muted">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries
          </p>
          <div className="flex  items-center gap-6 uppercase">
            <div>
              <img src={headphone} alt="" className="h-10" />
            </div>
            <p className="text-primary">Call center : +12 12345 6789</p>
          </div>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
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

export default Section2;
