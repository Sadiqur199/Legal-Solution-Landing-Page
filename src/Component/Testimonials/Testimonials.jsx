// src/components/Testimonials.js
import React from 'react';
import icon1 from '../../assets/slider-1.jpg';
import icon2 from '../../assets/slider-2.jpg';

const Testimonials = () => {
  return (
    <section className="mb-20 mt-20">
      <div className="text-center">
        <h1 className="text-3xl mb-5">What Our Clients Say</h1>
        <p className="text-gray-400">
          There are many variations of passages of Lorem Ipsum available, but the majority have <br />
          suffered alteration in some form, by injected humour.
        </p>
      </div>
      <div className="carousel mt-10">
        <div className="carousel-item">
          <div className="card w-96 mx-auto bg-base-100 shadow-xl">
            <div className="card-body">
              <p>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
              </p>
            </div>
            <div className="flex mx-auto mb-10">
              <img className="w-14 mr-5" src={icon1} alt="Client" />
              <div>
                <h3>John David</h3>
                <p>Founder and CEO</p>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="card w-96 mx-auto bg-base-100 shadow-xl">
            <div className="card-body">
              <p>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
              </p>
            </div>
            <div className="flex mx-auto mb-10">
              <img className="w-14 mr-5" src={icon2} alt="Client" />
              <div>
                <h3>Kevin Martin</h3>
                <p>Founder and CEO</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
