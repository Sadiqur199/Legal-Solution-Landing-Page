import React from 'react';

const Banner = () => (
  <section className="banner-bg bg-cover bg-center w-full h-128 rounded-lg" style={{ backgroundImage: 'url(https://i.ibb.co/1sSfDzC/banner.png)' }}>
    <div className="text-center md:py-44 sm:py-24 ">
      <p className="text-white text-5xl mb-5">We Offer Robust
 <br /> Legal Solutions</p>
      <p className="text-white mb-5">There are many different legal solution passages available, but most of them <br/> have undergone some kind of modification due to the addition of comedy.</p>
      <div>
        <input type="text" placeholder="Search Your Service" className="input mb-5 w-full max-w-xs" />
        <button className="btn bg-blue-500 text-white hover:bg-blue-500 border-none ml-5">Submit</button>
      </div>
    </div>
  </section>
);

export default Banner;
