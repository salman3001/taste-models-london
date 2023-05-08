import girl1 from "../../images/girl-slide-1.png";

const AboutUsSection1 = () => {
  return (
    <div
      className="w-full 2xl:h-[60vh] xl:h-[50vh] lg:h-[40vh] md:h-[30vh] sm:h-[25vh] h-[18vh] bg-center bg-cover brightness-50"
      style={{
        backgroundImage: `url(${girl1})`,
      }}
    ></div>
  );
};

export default AboutUsSection1;
