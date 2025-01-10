import React, { useEffect, useState } from 'react';
import SectionTitle from './SectionTitle';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { FaQuoteLeft } from "react-icons/fa6";


const Testimonials = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className='w-10/12 mx-auto'>
            <SectionTitle heading={"TESTIMONIALS"} subHeading={"What Our Clients Say"}></SectionTitle>
            <div className='pb-40'>
                <Swiper navigation={true} modules={[Navigation]} className="">

                    {
                        reviews.map(review => <SwiperSlide key={review._id}>
                            <div className='flex flex-col justify-center items-center w-8/12 mx-auto'>
                                <Rating style={{ maxWidth: 250 }} value={review.rating} />
                                <div className='py-8'>
                                    <FaQuoteLeft size={100} ></FaQuoteLeft>
                                </div>
                                <p className='text-lg'>{review.details}</p>
                                <h2 className='text-[#CD9003] text-3xl'>{review.name}</h2>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;