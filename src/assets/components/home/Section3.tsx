import girl2 from "../../images/girl-slide-2.png";

const Section3 = () => {
  return (
    <div className=" bg-base1">
      <div className=" sm:space-y-5 border-b border-[#21272D]  padding-1 py-10 md:py-16 lg:py-20 xl:py-24 ">
        <h1 className="text-4xl font-light max-w-[30.7rem]">
          Lorem Ipsum is simply dummy text of the printing
        </h1>
        <p className="uppercase text-primary">Lorem Ipsum</p>
      </div>
      <div className="grid sm:grid-cols-3 padding-1 gap-12 py-6 md:py-8 lg:py-10 xl:py-14">
        <div className="hidden sm:block"></div>
        <div className="max-w-[20rem] space-y-2">
          <p className="text-lg font-semibold">Lorem Ipsum</p>
          <p className="text-muted text-[1.05rem] leading-7">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been
          </p>
        </div>
        <div className="max-w-[20rem] space-y-2">
          <p className="text-lg font-semibold">Lorem Ipsum</p>
          <p className="text-muted text-[1.05rem] leading-7">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been
          </p>
        </div>
        <div className="hidden sm:block"></div>
        <div className="max-w-[20rem] space-y-2">
          <p className="text-lg font-semibold">Lorem Ipsum</p>
          <p className="text-muted text-[1.05rem] leading-7">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been
          </p>
        </div>
        <div className="max-w-[20rem] space-y-2">
          <p className="text-lg font-semibold">Lorem Ipsum</p>
          <p className="text-muted text-[1.05rem] leading-7">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been
          </p>
        </div>
      </div>
      <div className="padding-1 w-full py-10 md:py-14 lg:py-16 xl:py-20 xl:pb-28">
        <img src={girl2} alt="" className="w-full" />
      </div>
    </div>
  );
};

export default Section3;
