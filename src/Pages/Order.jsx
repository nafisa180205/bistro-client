import React, { useState } from 'react';
import Cover from '../Components/Cover';
import orderImg from "../assets/shop/banner2.jpg"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useMenu } from '../Hooks/useMenu';
import FoodCard from '../Components/FoodCard';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import OtherTab from '../Components/OtherTab';


const Order = () => {
    const categories = ["salad", "pizza", "soup", "desserts", "drinks"]
    const { category } = useParams("")
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex)
    console.log(category)

    const [menu] = useMenu()
    const drinks = menu.filter(item => item.category === "drinks")
    const dessert = menu.filter(item => item.category === "dessert")
    const pizza = menu.filter(item => item.category === "pizza")
    const salad = menu.filter(item => item.category === "salad")
    const soup = menu.filter(item => item.category === "soup")
    return (
        <div>
            <Helmet>
                <title>Bistro Boss||Order</title>
            </Helmet>
            <Cover title={"OUR SHOP"} subTitle={"Would you like to try a dish?"} img={orderImg}></Cover>
            <div className='w-10/12 mx-auto'>
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>SALAD</Tab>
                        <Tab>PIZZA</Tab>
                        <Tab>SOUP</Tab>
                        <Tab>DESSERTS</Tab>
                        <Tab>DRINKS</Tab>
                    </TabList>
                    <TabPanel>
                        <OtherTab items={salad}></OtherTab>
                    </TabPanel>
                    <TabPanel>
                        <OtherTab items={pizza}></OtherTab>

                    </TabPanel>
                    <TabPanel>
                        <OtherTab items={soup}></OtherTab>

                    </TabPanel>
                    <TabPanel>
                        <OtherTab items={dessert}></OtherTab>
                    </TabPanel>
                    <TabPanel>
                        <OtherTab items={drinks}></OtherTab>

                    </TabPanel>
                </Tabs>
            </div>

        </div>
    );
};

export default Order;