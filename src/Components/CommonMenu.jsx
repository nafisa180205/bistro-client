import React from 'react';
import MenuItem from './MenuItem';
import SectionTitle from './SectionTitle';
import SectionCover from './SectionCover';
import { Link } from 'react-router-dom';

const CommonMenu = ({title, subTitle,img, heading, subHeading,menu}) => {
    const lower = title ? title.toLowerCase() : '';
    console.log(lower)
    return (
        <div className='flex flex-col justify-center items-center pb-20 w-full'>
            {heading && <SectionTitle heading={heading} subHeading={subHeading}></SectionTitle>}
            {title && <div className='w-full'><SectionCover title={title} subTitle={subTitle} img={img}></SectionCover></div>}

            <div className='w-10/12 mx-auto grid lg:grid-cols-2 grid-cols-1 gap-6 py-14'>
                {menu.map(item=><MenuItem
                key={item._id} item={item}
                ></MenuItem>)}


            </div>

            <Link to={`/order/${lower}`}><button className='btn bg-transparent border-0 px-5 py-3 border-b-4 rounded-lg  border-blue-950 font-semibold' > ORDER YOUR FAVOURITE FOOD </button></Link>
        </div>
    );
};

export default CommonMenu;