import React from 'react';

const Banner = () => (
  <section className="banner-bg bg-cover bg-center w-full h-128 rounded-lg" style={{ backgroundImage: 'url(https://i.ibb.co/1sSfDzC/banner.png)' }}>
    <div className="text-center md:py-44 sm:py-24 ">
      <p className="text-white text-5xl mb-5">We Provide Effective <br /> Legal Solutions</p>
      <p className="text-white mb-5">Here are many variations of passages of legal solution available, but the majority <br /> have suffered alteration in some form, by injected humour.</p>
      <div>
        <input type="text" placeholder="Search Your Service" className="input mb-5 w-full max-w-xs" />
        <button className="btn btn-info ml-5">Submit</button>
      </div>
    </div>
  </section>
);

export default Banner;
