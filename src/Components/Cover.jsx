import React from 'react';
import { Parallax, Background } from 'react-parallax';

const Cover = ({ img, title, subTitle }) => {
    return (
        <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={img}
        bgImageAlt="the dog"
        strength={-200}
    >
        <div
            className="hero min-h-[calc(100vh-300px)] w-full"
            >
            {/* <div className="hero-overlay bg-opacity-60"></div> */}
            <div className='bg-black/40 w-8/12 mx-auto py-32'>
                <div className="hero-content text-neutral-content text-center ">
                    <div className="max-w-3xl">
                        <h1 className="mb-5 text-7xl font-bold">{title}</h1>
                        <p className="mb-5">
                            {subTitle}
                        </p>
                        
                    </div>
                </div>
            </div>
        </div>
    </Parallax>
        
    );
};

export default Cover;