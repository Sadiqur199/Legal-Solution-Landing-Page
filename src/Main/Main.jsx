import React from 'react';
import Navbar from '../Component/Navbar/Navbar';
import Banner from '../Component/Banner/Banner';
import PracticeArea from '../Component/PracticeArea/PracticeArea';
import Testimonials from '../Component/Testimonials/Testimonials';

const Main = () => {
  return (
    <div className='container md:px-28 sm:px-0'>
      <Navbar></Navbar>
      <Banner></Banner>
      <PracticeArea></PracticeArea>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Main;