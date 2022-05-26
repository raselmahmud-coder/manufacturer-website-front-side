import "./Review.css";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, EffectCoverflow } from "swiper";
import axios from "axios";

SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  axios
    .get(`https://auto-parts-rm.herokuapp.com/reviews`)
    .then((res) => setReviews(res.data));

  return (
    <div>
      <h1 className="text-4xl text-center uppercase my-4">
        What Our Customer Says {reviews.length}
      </h1>
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
        style={{ height: "500px", padding: "80px 0px" }}
      >
        {reviews?.map((review, index) => (
          <>
            <SwiperSlide
              key={review._id}
              style={{
                backgroundColor: "rosybrown",
              }}
              className="custom-swiper p-18"
            >
              <div className="rounded-xl p-8">
                <h1 className="text-3xl text-orange-400 text-center">
                  {index + 1}
                </h1>
                <h1 className="text-2xl text-white">{review.message}</h1>
                <div className="flex justify-between my-2">
                  <p className="text-xl capitalize">Rating {review.rating} out of 5</p>
                  <p className="text-xl capitalize">Customer Name {review.name}</p>
                </div>
              </div>
            </SwiperSlide>
          </>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
