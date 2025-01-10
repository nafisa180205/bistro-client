import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../Components/Cover';
import menuBg from "../assets/menu/banner3.jpg"
import CommonMenu from '../Components/CommonMenu';
import { useMenu } from '../Hooks/useMenu';
import dessertImg from "../assets/menu/dessert-bg.jpeg"
import pizzaImg from "../assets/menu/pizza-bg.jpg"
import saladImg from "../assets/menu/salad-bg.jpg"
import soupImg from "../assets/menu/soup-bg.jpg"

const Menu = () => {
    const [menu] = useMenu()
    const offered = menu.filter(item => item.category === "offered")
    const dessert = menu.filter(item => item.category === "dessert")
    const pizza = menu.filter(item => item.category === "pizza")
    const salad = menu.filter(item => item.category === "salad")
    const soup = menu.filter(item => item.category === "soup")
    return (
        <div>
            <Helmet>
                <title>Bistro Boss||Menu</title>
            </Helmet>
            <Cover title={"OUR MENU"} subTitle={"Would you like to try a dish?"} img={menuBg}></Cover>
            <CommonMenu heading={"TODAY'S OFFER"} subHeading={"Don't miss"} menu={offered}></CommonMenu>
            {/* dessert */}
            <CommonMenu title={"DESSERTS"} subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} menu={dessert} img={dessertImg}></CommonMenu>
            {/* Pizaa */}
            <CommonMenu title={"PIZZA"} subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} menu={pizza} img={pizzaImg}></CommonMenu>
            {/* salad */}
            <CommonMenu title={"SALADS"} subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} menu={salad} img={saladImg}></CommonMenu>
            {/* soup */}
            <CommonMenu title={"SOUPS"} subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} menu={soup} img={soupImg}></CommonMenu>

        </div>
    );
};

export default Menu;