import "./Review.css";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, EffectCoverflow } from "swiper";

SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

const Reviews = () => {
  return (
    <div>
      <Swiper
        navigation
        loop={true}
        pagination={{ clickable: true }}
        effect="coverflow"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        slidesPerView={2}
        centeredSlides
        style={{ height: "400px", padding: "80px 0px" }}
      >
        <SwiperSlide
          style={{
            backgroundColor: "rosybrown",
          }}
          className="custom-swiper"
        >
          <h1 className="text-3xl text-orange-400 text-center"> Slide 1</h1>
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundColor: "rosybrown",
          }}
          className="custom-swiper"
        >
          <h1 className="text-3xl text-orange-400 text-center"> Slide 2</h1>
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundColor: "rosybrown",
          }}
          className="custom-swiper"
        >
          <h1 className="text-3xl text-orange-400 text-center"> Slide 3</h1>
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundColor: "rosybrown",
          }}
          className="custom-swiper"
        >
          <h1 className="text-3xl text-orange-400 text-center"> Slide 4</h1>
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundColor: "rosybrown",
          }}
          className="custom-swiper"
        >
          <h1 className="text-3xl text-orange-400 text-center"> Slide 5</h1>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Reviews;
