import React, { FC } from "react";
import Navbar from "../../common/components/navbar";
import Topbar from "../../common/components/topbar";

import Footer from "../../common/components/footer";
import About from "./components/about";
import Carousel from "./components/carousel";
import Service from "./components/service";
import Price from "./components/price";
import Testimonial from "./components/testimonial";
import Blog from "./components/blog";
import Batches from "./components/batches";

const HomePage: FC = (): JSX.Element => {
  return (
    <div>
      <Topbar />
      <Navbar />
      <Carousel />
      <About />
      <Service />
      <Price />
      <Batches />
      <Testimonial />
      <Blog />
      <Footer />
    </div>
  );
};
export default HomePage;
