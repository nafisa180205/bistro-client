import React from 'react';
import SectionTitle from './SectionTitle';
import featuredPhoto from "../assets/home/featured.jpg"
import "../App.css"

const Featured = () => {
    return (
        <div className="background-image  text-white  bg-fixed" >
            <div className='bg-black/30 pb-20'>
            <SectionTitle heading={"FROM OUR MENU"} subHeading={"Check it out"}></SectionTitle>
            <div className='w-10/12 mx-auto flex justify-center items-center gap-16 space-y-2  '>
                <img className='w-1/2' src={featuredPhoto} alt="" />
                <div className='w-1/2'>
                    <p className='text-xl'>March 20, 2023
                    </p>
                    <h3 className='text-[24px]'>
                    WHERE CAN I GET SOME?
                    </h3>
                    <p className='text-lg'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.
                    </p>
                    <button className='btn px-5 py-3 border-0 border-b-4 rounded-lg text-white border-white bg-transparent' >Read More</button>
                </div>
            </div>
            </div>

        </div>
    );
};

export default Featured;