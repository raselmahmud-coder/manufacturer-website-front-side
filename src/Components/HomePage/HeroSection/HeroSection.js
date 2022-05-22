import React from "react";
import slider1 from "../../../images/slide1.jpg";
import slider2 from "../../../images/slide2.jpg";
import slider3 from "../../../images/slide3.jpg";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const HeroSection = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper lg:h-[480px] h-[200px]"
      >
        <SwiperSlide>
          <img width={"100%"} style={{margin:"0 auto"}} src={slider1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img width={"100%"} style={{margin:"0 auto"}} src={slider2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img width={"100%"} style={{margin:"0 auto"}} src={slider3} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HeroSection;
