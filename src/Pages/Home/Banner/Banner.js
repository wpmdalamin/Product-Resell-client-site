import React from 'react';
import { Link } from 'react-router-dom';
import bannerimg from '../../../images/used-mobile.jpg';

const Banner = () => {
  return (
    <div>
      <div className="hero h-96" style={{ backgroundImage: `url(${bannerimg})` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-5xl font-bold">Best Used Mobile Phones<br /> Buy & Selling Platform in Bangladesh</h1>
            <p className="mb-5">Md USED PHONE SEll.com has over 100+ listings for mobile phone. <br/>Top brands based on number of listings are Xiaomi, Samsung, Apple, Vivo, OPPO in Bangladesh.</p>
            <Link to="all-product">
              <button className="btn btn-accent btn-sm">All Product</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;