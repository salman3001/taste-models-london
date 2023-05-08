import { Swiper, SwiperSlide } from "swiper/react";
import model1 from "../../images/model-1.png";
import model2 from "../../images/model-2.png";
import model3 from "../../images/model-3.png";
import arrowRight from "../../images/arrow-right.svg";
import ArrowLeft from "../../images/arrow-left.svg";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper";
import ModelCard from "../ModelCard";
import { useSwiper } from "swiper/react";
import { useEffect, useState } from "react";

const ModelDetailSection2 = () => {
  return (
    <div className="padding-1 padding-2 space-y-16 bg-base1">
      <div className=" sm:space-y-5  ">
        <h1 className="text-4xl font-light text-center">
          Similar recommended Models
        </h1>
      </div>
      <Swiper
        style={{ height: "100%" }}
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay]}
        className="mySwiper"
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
        autoplay={{
          disableOnInteraction: false,
        }}
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
        <Controllers />
      </Swiper>
    </div>
  );
};

export default ModelDetailSection2;

const Controllers = () => {
  const swiper = useSwiper();
  const [activeSlide, setActiveSlide] = useState(1);

  useEffect(() => {
    swiper.on("slideChange", (swip) => {
      setActiveSlide(swip.activeIndex);
    });
  }, [swiper]);

  return (
    <div className="flex justify-center items-center gap-12  my-16">
      <div>
        <img
          src={ArrowLeft}
          alt=""
          className="cursor-pointer"
          onClick={() => {
            swiper.slidePrev();
          }}
        />
      </div>
      <p className="text-2xl">
        {activeSlide + 1}/{swiper.slides.length}
      </p>
      <div>
        <img
          src={arrowRight}
          alt=""
          className="cursor-pointer"
          onClick={() => {
            swiper.slideNext();
          }}
        />
      </div>
    </div>
  );
};
