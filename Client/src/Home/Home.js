import React from "react";

import ProductCards from "../ProductCards/ProductCards";

import { ExampleComponent } from "../ExampleComponent/ExampleComponent";
import Footer from "../Footer/Footer";

import "./Home.css";
import IconGrid from "../IconGrid/IconGrid";
import OurStore from "../OurStore/OurStore";
import ProductDetail from "../PremiumCards/PremiumCardDetail";
import PremiumCards from "../PremiumCards/PremiumCards";
import ProductPage from "../ProductPage/ProductPage";
import LaunchPage from "../techLaunch/LaunchPage";
import AnimatedTitle from "../Titile/AnimatedTitle";

import VideoBanner from "../VideoBanner/VideoBanner";

const Home = () => {
  return (
    <>
      <VideoBanner />
      <IconGrid />
      <ProductPage />
      <Footer />
      <AnimatedTitle />

      {/* 
    
      <ExampleComponent /> */}
    </>
  );
};

export default Home;
