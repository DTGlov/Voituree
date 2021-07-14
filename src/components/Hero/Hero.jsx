import React from 'react';
import './Hero.scss';

import wagon from '../../assets/gwagon.png';


function Hero() {
    return (
      <section className="hero-section">
        <div className="hero-section-container">
          <div className="hero-text">
            <h1 className="hero-text-first">RENT A</h1>
            <h2 className="hero-text-second">LUXURY CAR</h2>
            <p className="hero-text-paragraph">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Necessitatibus qui perspiciatis ab soluta corrupti ea nobis
              distinctio unde adipisci tenetur sapiente quibusdam provident
              ipsum aliquam possimus exercitationem vero explicabo, deleniti
            </p>
            <div className="hero-text-button-bg">
              <div className="hero-text-button-bg-first">
                <p>Book Your Ride</p>
              </div>
              <div className="hero-text-button-bg-second">
                <p>Sell Your Car</p>
              </div>
            </div>
          </div>
          <div className="hero-text-image">
            <img src={wagon} alt="" className="hero-text-image-wagon" />
          </div>
        </div>
        <div className="hero-text-button-sm">
              <div className="hero-text-button-sm-first">
                <p>Book Your Ride</p>
              </div>
              <div className="hero-text-button-sm-second">
                <p>Sell Your Car</p>
              </div>
            </div>
      </section>
    );
}

export default Hero
