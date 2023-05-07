import { Swiper, SwiperSlide } from "swiper/react";
import model1 from "../../images/model-1.png";
import model2 from "../../images/model-2.png";
import model3 from "../../images/model-3.png";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import ModelCard from "../ModelCard";

const AboutusSection3 = () => {
  return (
    <div className="padding-1 padding-2">
      <div className=" sm:space-y-5 border-b border-[#21272D]  ">
        <h1 className="text-4xl font-light max-w-[30.7rem]">
          Lorem Ipsum is simply dummy text of the printing
        </h1>
        <p className="uppercase text-primary">Lorem Ipsum</p>
      </div>
      <Swiper
        style={{ height: "100%" }}
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        loop={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          600: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
        }}
        autoplay
      >
        <SwiperSlide>
          <ModelCard
            img={model1}
            name="Lara"
            detail="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
"
            rating={5}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ModelCard
            img={model2}
            name="Bella"
            detail="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
"
            rating={5}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ModelCard
            img={model3}
            name="Lara"
            detail="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
"
            rating={5}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ModelCard
            img={model1}
            name="Lara"
            detail="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
"
            rating={5}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ModelCard
            img={model1}
            name="Lara"
            detail="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
"
            rating={5}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ModelCard
            img={model2}
            name="Bella"
            detail="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
"
            rating={5}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ModelCard
            img={model3}
            name="Lara"
            detail="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
"
            rating={5}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ModelCard
            img={model1}
            name="Lara"
            detail="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
"
            rating={5}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ModelCard
            img={model1}
            name="Lara"
            detail="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
"
            rating={5}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ModelCard
            img={model2}
            name="Bella"
            detail="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
"
            rating={5}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ModelCard
            img={model3}
            name="Lara"
            detail="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
"
            rating={5}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ModelCard
            img={model1}
            name="Lara"
            detail="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
"
            rating={5}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AboutusSection3;
