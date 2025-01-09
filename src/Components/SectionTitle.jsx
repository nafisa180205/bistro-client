import React, { useEffect, useState } from 'react';

const SectionTitle = ({heading , subHeading}) => {

    return (
        <div className='lg:w-3/12 w-72  mx-auto text-center lg:py-20 py-10 '>
            
            <p className='text-[#D99904] py-3 md:text-xl text-lg'>---{subHeading}---</p>
            <h3 className=' py-5 border-y-4 mb-4 border-gray-300 md:text-[40px] text-3xl font-semibold uppercase'>{heading}</h3>
            
        </div>
    );
};

export default SectionTitle;