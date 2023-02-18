import React, { FC } from "react";
import About from "../about/components/about";
import Carousel from "./components/carousel";
import Service from "../services/components/service";
import Price from "../price/components/price";
import Testimonial from "../services/components/testimonial";
import Blog from "./components/blog";
import Batches from "../batches/components/batches";

const HomePage: FC = (): JSX.Element => {
  return (
    <div>
      <Carousel />
      <About />
      <Service />
      <Price />
      <Batches />
      <Testimonial />
      <Blog />
    </div>
  );
};
export default HomePage;
