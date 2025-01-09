import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import './Category.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

import slide1 from "../assets/home/slide1.jpg"
import slide2 from "../assets/home/slide2.jpg"
import slide3 from "../assets/home/slide3.jpg"
import slide4 from "../assets/home/slide4.jpg"
import slide5 from "../assets/home/slide5.jpg"
import SectionTitle from './SectionTitle';

const Ctegory = () => {
  return (
    <div className='lg:w-10/12 mx-auto'>
      <SectionTitle heading={"Order Online"} subHeading={"From 11:00am to 10:00pm"}></SectionTitle>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className=" flex justify-center items-center"
      >
        <SwiperSlide>
          <img className='w-full ' src={slide1} alt="" />
          <h3 className='text-4xl uppercase text-center -mt-16 text-white'>salad</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full ' src={slide2} alt="" />
          <h3 className='text-4xl uppercase text-center -mt-16 text-white'>salad</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full ' src={slide3} alt="" />
          <h3 className='text-4xl uppercase text-center -mt-16 text-white'>salad</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full ' src={slide4} alt="" />
          <h3 className='text-4xl uppercase text-center -mt-16 text-white'>salad</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full ' src={slide5} alt="" />
          <h3 className='text-4xl uppercase text-center -mt-16 text-white'>salad</h3>
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Ctegory;