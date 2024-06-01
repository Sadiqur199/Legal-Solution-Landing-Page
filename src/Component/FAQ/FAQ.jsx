// src/components/FAQ.js
import React from 'react';
import faqImage from '../../assets/faq.png'; // Make sure to place the image in the appropriate directory

const FAQ = () => {
  return (
    <div className="mt-10 mb-10">
      <div className="text-center">
        <h1 className="text-3xl mb-5">Frequently Asked Questions</h1>
        <p className="text-gray-400">
          There are many variations of passages of Lorem Ipsum available, but the majority have <br />
          suffered alteration in some form, by injected humour.
        </p>
      </div>
<div className='md:flex mb-20 sm:flex-none'>
  <div className='mt-10'>
          
  <div className="collapse w-[80%] mb-10 mx-auto bg-gray-100 rounded-box">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          What is Legal Advice?
        </div>
        <div className="collapse-content">
          <p>
            Legal advice is the giving of a professional or formal opinion regarding the substance or procedure of the law in relation to a particular factual situation.
          </p>
        </div>
      </div>
      
      <div className="collapse w-[80%] mb-10 mx-auto mt-5 bg-gray-100 rounded-box">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          How to file a lawsuit?
        </div>
        <div className="collapse-content">
          <p>
            Filing a lawsuit involves submitting legal paperwork to the court, outlining the basis of the claim and the remedy being sought.
          </p>
        </div>
      </div>
      
      <div className="collapse w-[80%] mx-auto mt-5 bg-gray-100 rounded-box">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          What are the costs involved in litigation?
        </div>
        <div className="collapse-content">
          <p>
            The costs involved in litigation can include filing fees, attorney fees, and expenses related to gathering evidence and court proceedings.
          </p>
        </div>
      </div>
  </div>
  <div className="text-center mt-10">
        <img className="w-[80%] h-[80%] mx-auto" src={faqImage} alt="FAQ" />
      </div>
</div>
      

    </div>
  );
};

export default FAQ;
