import React from 'react';
import logo from '../../assets/logo2.png';

const Navbar = () => (
  <div className="navbar bg-base-100 mb-24">
    <div className="navbar-start">
      <div className="dropdown">
        <label tabIndex="0" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Service</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </div>
      <a href="#home" className="btn btn-ghost normal-case text-xl">
        <img className="w-28 h-8 brightness-100" src={logo} alt="Logo" />
      </a>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Service</a></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>
    </div>
    <div className="navbar-end">
      <label htmlFor="my-modal" className="btn bg-blue-500 text-white hover:bg-blue-500">Contact Us</label>
    </div>
  </div>
);

export default Navbar;
