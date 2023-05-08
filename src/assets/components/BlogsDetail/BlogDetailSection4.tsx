import { Swiper, SwiperSlide } from "swiper/react";
import arrowRight from "../../images/arrow-right.svg";
import ArrowLeft from "../../images/arrow-left.svg";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper";
import { useSwiper } from "swiper/react";
import { useEffect, useState } from "react";
import BlogCard from "../BlogCard";

const BlogDetailSection4 = () => {
  return (
    <div className="padding-1 padding-2 space-y-16 bg-base1">
      <div className=" sm:space-y-5  ">
        <h1 className="text-4xl font-light text-center">
          Similar recommended blogs
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
          <BlogCard />
        </SwiperSlide>
        <SwiperSlide>
          <BlogCard />
        </SwiperSlide>
        <SwiperSlide>
          <BlogCard />
        </SwiperSlide>
        <SwiperSlide>
          <BlogCard />
        </SwiperSlide>
        <SwiperSlide>
          <BlogCard />
        </SwiperSlide>
        <SwiperSlide>
          <BlogCard />
        </SwiperSlide>
        <SwiperSlide>
          <BlogCard />
        </SwiperSlide>
        <SwiperSlide>
          <BlogCard />
        </SwiperSlide>
        <SwiperSlide>
          <BlogCard />
        </SwiperSlide>
        <SwiperSlide>
          <BlogCard />
        </SwiperSlide>
        <SwiperSlide>
          <BlogCard />
        </SwiperSlide>
        <SwiperSlide>
          <BlogCard />
        </SwiperSlide>
        <Controllers />
      </Swiper>
    </div>
  );
};

export default BlogDetailSection4;

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
