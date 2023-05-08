import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import { IProduct } from "../../../../types";

SwiperCore.use([Navigation, Pagination]);

interface Props {
  products?: IProduct[];
}

const Slider = ({ products = [] }: Props) => {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      className=""
    >
      {products.map((product) => (
        <SwiperSlide key={product._id}>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <h3 className="mt-2 font-medium text-gray-900">{product.name}</h3>
            <p className="mt-1 text-gray-700">{product.price}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
