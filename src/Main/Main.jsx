import React from "react";
import Navbar from "../Component/Navbar/Navbar";
import Banner from "../Component/Banner/Banner";
import PracticeArea from "../Component/PracticeArea/PracticeArea";
import Testimonials from "../Component/Testimonials/Testimonials";
import FAQ from "../Component/FAQ/FAQ";
import Contact from "../Component/Contact/Contact";
import Footer from "../Component/Footer/Footer";

const Main = () => {
  return (
    <div>
      <div className="container md:px-28 sm:px-0">
        <Navbar></Navbar>
        <Banner></Banner>
        <PracticeArea></PracticeArea>
        <Testimonials></Testimonials>
        <FAQ></FAQ>
        <Contact></Contact>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Main;
