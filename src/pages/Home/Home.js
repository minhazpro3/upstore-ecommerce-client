import React from "react";
import PaymentMethod from "./../Home/PaymentMethod";
import RecentlyAdded from "./RecentlyAdded";
import Review from "./Review";
import TopProducts from "./TopProducts";

export const Home = () => {
  return (
    <div>
   
      <TopProducts/>
      <RecentlyAdded/>
      <Review/>
      <PaymentMethod/>
     
    </div>
  );
};
