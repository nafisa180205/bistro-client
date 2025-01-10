import React from 'react';
import Slider from '../Components/Slider';
import Ctegory from '../Components/Ctegory';
import PopularMenu from '../Components/PopularMenu';
import Featured from '../Components/Featured';
import Testimonials from '../Components/Testimonials';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss||Home</title>
            </Helmet>
            <Slider></Slider>
            <Ctegory></Ctegory>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;