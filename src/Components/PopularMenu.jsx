import React, { useEffect, useState } from 'react';
import SectionTitle from './SectionTitle';
import MenuItem from './MenuItem';

const PopularMenu = () => {
    const [menu, setMenu] = useState([])
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === "popular")
                setMenu(popularItems)
            })
    }, [])
    return (
        <div className='flex flex-col justify-center items-center pb-20'>
            <SectionTitle heading={"CHEF RECOMMENDS"} subHeading={"Should Try"}></SectionTitle>

            <div className='w-10/12 mx-auto grid lg:grid-cols-2 grid-cols-1 gap-6 pb-14'>
                {menu.map(item=><MenuItem
                key={item._id} item={item}
                ></MenuItem>)}



            </div>

            <button className='px-5 py-3 border-b-4 rounded-lg  border-blue-950 font-semibold' > View Full Menu</button>
        </div>
    );
};

export default PopularMenu;