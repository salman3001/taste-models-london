import Rating from "../Rating";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { useSwiper } from "swiper/react";
import { useEffect, useState } from "react";
import { Autoplay } from "swiper";
import { BsArrowRightShort } from "react-icons/bs";

export const Section6 = () => {
  return (
    <div className="padding-1 padding-2 pb-0 w-full">
      <h1 className="text-4xl font-light max-w-[28.6rem]">
        Lorem Ipsum is simply dummy text of the printing text of the printing
      </h1>
      <div className="padding-2 px-6 ">
        <Swiper
          style={{ height: "100%" }}
          slidesPerView={3}
          spaceBetween={30}
          modules={[Autoplay]}
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
          autoplay={{ disableOnInteraction: false }}
        >
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <Bullets />
        </Swiper>
      </div>
    </div>
  );
};

const Card = () => {
  return (
    <div className="space-y-4 p-4 lg:p-10 border-l border-[#21272D]">
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

const Bullets = () => {
  const swiper = useSwiper();
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    swiper.on("slideChange", (swip) => {
      setActiveSlide(swip.realIndex);
    });
  }, [swiper]);

  console.log(activeSlide);

  return (
    <div className="flex justify-center items-center gap-8 mt-6">
      {activeSlide === 0 ? (
        <div className="h-2 w-2 text-3xl leading-[0] font-thin scaleIn">+</div>
      ) : (
        <div className="h-1.5 w-1 bg-white rounded-full cursor-not-allowed "></div>
      )}
      {activeSlide === 1 ? (
        <div className="h-2 w-2 text-3xl leading-[0] font-thin scaleIn">+</div>
      ) : (
        <div className="h-1.5 w-1 bg-white rounded-full cursor-not-allowed "></div>
      )}
      {activeSlide === 2 ? (
        <div className="h-2 w-2 text-3xl leading-[0] font-thin scaleIn">+</div>
      ) : (
        <div className="h-1.5 w-1 bg-white rounded-full cursor-not-allowed "></div>
      )}
      {activeSlide === 3 ? (
        <div className="h-2 w-2 text-3xl leading-[0] font-thin scaleIn">+</div>
      ) : (
        <div className="h-1.5 w-1 bg-white rounded-full cursor-not-allowed "></div>
      )}
      {activeSlide === 4 ? (
        <div className="h-2 w-2 text-3xl leading-[0] font-thin scaleIn">+</div>
      ) : (
        <div className="h-1.5 w-1 bg-white rounded-full cursor-not-allowed "></div>
      )}
      {activeSlide === 5 ? (
        <div className="h-2 w-2 text-3xl leading-[0] font-thin scaleIn">+</div>
      ) : (
        <div className="h-1.5 w-1 bg-white rounded-full cursor-not-allowed "></div>
      )}
      <div
        className="cursor-pointer"
        onClick={() => {
          swiper.slideNext();
        }}
      >
        <BsArrowRightShort size={22} color="#BFA37C" />
      </div>
    </div>
  );
};
