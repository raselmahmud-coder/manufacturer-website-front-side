import "./TrustedInProduction.css";
import React from "react";
import image1 from "../../../images/b1.jpg";
import image2 from "../../../images/b2.jpg";
import image3 from "../../../images/b3.jpg";
import image4 from "../../../images/b4.jpg";
import image5 from "../../../images/b5.jpg";
import image6 from "../../../images/b6.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper";

const TrustedInProduction = () => {
  return (
    <div className="lg:my-12 my-8">
      <h1 className="text-5xl font-bold text-center">Trusted in Production by</h1>

      <Swiper
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        autoplay={{
          delay: 0,
          disableOnInteraction: true,
        }}
        loop={true}
        speed={3000}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="swiper-custom"
      >
        <SwiperSlide className="swiper-slide-custom"><img src={image1} alt="" /></SwiperSlide>
        <SwiperSlide className="swiper-slide-custom"><img src={image2} alt="" /></SwiperSlide>
        <SwiperSlide className="swiper-slide-custom"><img src={image3} alt="" /></SwiperSlide>
        <SwiperSlide className="swiper-slide-custom"><img src={image4} alt="" /></SwiperSlide>
        <SwiperSlide className="swiper-slide-custom"><img src={image5} alt="" /></SwiperSlide>
        <SwiperSlide className="swiper-slide-custom"><img src={image6} alt="" /></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default TrustedInProduction;
