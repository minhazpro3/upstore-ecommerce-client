import React from "react";
import Banner from "./../../components/Home/Banner";
import PaymentMethod from "./../Home/PaymentMethod";
import RecentlyAdded from "./RecentlyAdded";
import Review from "./Review";
import TopProducts from "./TopProducts";

export const Home = () => {
  return (
    <div>
      <Banner />
      <TopProducts/>
      <RecentlyAdded/>
      <Review/>
      <PaymentMethod/>
     
    </div>
  );
};
