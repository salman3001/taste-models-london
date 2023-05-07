import Rating from "../Rating";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper";

export const Section6 = () => {
  return (
    <div className="padding-1 padding-2 w-full">
      <h1 className="text-4xl font-light max-w-[28.6rem]">
        Lorem Ipsum is simply dummy text of the printing text of the printing
      </h1>
      <div className="padding-2 px-6 pb-40">
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
        </Swiper>
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
