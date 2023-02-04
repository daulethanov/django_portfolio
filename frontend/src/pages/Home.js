import Header from "../components /heaeder /Header";
import OrderList from "./order/OrderList";
import React from "react";
import OrderCreate from "./order/OrderCreate";

const Home = () => {
    return(
        <>
            <Header/>

            <OrderCreate/>
        </>
)}

export default Home