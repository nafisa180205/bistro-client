import React, { useEffect, useState } from 'react';
import SectionTitle from './SectionTitle';
import MenuItem from './MenuItem';
import { useMenu } from '../Hooks/useMenu';

const PopularMenu = () => {
    const [menu] = useMenu()
    const popular = menu.filter(item => item.category === "popular")
    // const [menu, setMenu] = useState([])
    // useEffect(() => {
    //     fetch('menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const popularItems = data.filter(item => item.category === "popular")
    //             setMenu(popularItems)
    //         })
    // }, [])
    return (
        <div className='flex flex-col justify-center items-center pb-20'>
            <SectionTitle heading={"FROM OUR MENU"} subHeading={"Check it out"}></SectionTitle>

            <div className='w-10/12 mx-auto grid lg:grid-cols-2 grid-cols-1 gap-6 pb-14'>
                {popular.map(item=><MenuItem
                key={item._id} item={item}
                ></MenuItem>)}



            </div>

            <button className='px-5 py-3 border-b-4 rounded-lg  border-blue-950 font-semibold' > View Full Menu</button>
        </div>
    );
};

export default PopularMenu;