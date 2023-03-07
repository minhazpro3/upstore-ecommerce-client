import React from "react";
import Banner from "./../../components/Home/Banner";
import PaymentMethod from "./../Home/PaymentMethod";
import Review from "./Review";

export const Home = () => {
  return (
    <div>
      <Banner />
      <Review/>
      <PaymentMethod/>
     
    </div>
  );
};
