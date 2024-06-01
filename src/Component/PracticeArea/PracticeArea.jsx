import React from 'react';
import businessImg from '../../assets/business.png';
import criminalImg from '../../assets/criminal.png';
import childImg from '../../assets/child.png';
import educationImg from '../../assets/education.png';
import divorceImg from '../../assets/divorce.png';
import taxImg from '../../assets/tax.png';
import frameImg from '../../assets/Frame.png';

const PracticeArea = () => (
  <section>
    <div className="mt-20 text-center mb-10">
      <h1 className="text-3xl mb-5">The Legal Practice Area</h1>
      <p className="text-gray-400 text-sm">
        There are many variations of passages of legal practice available, but the majority have
        <br />
        suffered alteration in some form, by injected humour.
      </p>
    </div>
    <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-2 sm:m-auto">
      {[
        { title: "Business Law", imgSrc: businessImg },
        { title: "Criminal Law", imgSrc: criminalImg },
        { title: "Child Support", imgSrc: childImg },
        { title: "Education Law", imgSrc: educationImg },
        { title: "Divorce Law", imgSrc: divorceImg },
        { title: "Tax Law", imgSrc: taxImg },
      ].map((area, index) => (
        <div
          key={index}
          className={`card w-4/5 border-solid border-2 rounded-none ${index === 1 || index === 4 ? 'bg-gray-100' : 'bg-white'}`}
        >
          <figure><img className="mt-6 w-12" src={area.imgSrc} alt={area.title} /></figure>
          <div className="card-body">
            <h2 className="card-title mx-auto">{area.title}</h2>
            <p className="text-gray-400 text-sm text-justify">
            There are many different versions of {area.title.toLowerCase()} sections accessible, but most of them have been altered in some way by the addition of humour.
            </p>
            <div className="card-actions justify-center">
              <img className="w-8" src={frameImg} alt="Frame" />
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default PracticeArea;
