import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import '@smastrom/react-rating/style.css'
import { Rating } from "@smastrom/react-rating";


const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <section className=" my-20">
      <div className="md:w-4/12 mx-auto text-center my-8">
        <h2 className="text-yellow-600 mb-2">--- What Our Client Say ---</h2>
        <p className="text-3xl uppercase border-y-4 py-4">Testimonials</p>
      </div>

      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="flex flex-col items-center mx-24 my-16">
              <Rating style={{ maxWidth: 180 }} value={review.rating} readOnly />

              <p className="py-8">{review.details}</p>

              <h3 className="text-2xl text-orange-400">{review.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
