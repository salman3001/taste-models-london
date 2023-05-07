import Rating from "../Rating";

export const Section6 = () => {
  return (
    <div className="padding-1 padding-2 w-full">
      <h1 className="text-4xl font-light max-w-[28.6rem]">
        Lorem Ipsum is simply dummy text of the printing text of the printing
      </h1>
      <div className=" grid sm:grid-cols-3 padding-2">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

const Card = () => {
  return (
    <div className="space-y-4 p-10 border-l border-[#21272D]">
      <p className="text-xl font-semibold"> Lorem Ipsum</p>
      <Rating rating={4} />
      <p className="max-w-[20rem] text-lg">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been
      </p>
      <p className="uppercase text-primary">Lorem Ipsum</p>
    </div>
  );
};
