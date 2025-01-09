import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import im1 from "../assets/home/01.jpg"
import im2 from "../assets/home/02.jpg"
import im3 from "../assets/home/03.png"
import im4 from "../assets/home/04.jpg"
import im5 from "../assets/home/05.png"
import im6 from "../assets/home/06.png"

const Slider = () => {
    return (
        <Carousel>
        <div>
            <img src={im1}/>
        </div>
        <div>
            <img src={im2}/>
        </div>
        <div>
            <img src={im3}/>
        </div>
        <div>
            <img src={im4}/>
        </div>
        <div>
            <img src={im5}/>
        </div>
        <div>
            <img src={im6}/>
        </div>
        
    </Carousel>
    );
};

export default Slider;