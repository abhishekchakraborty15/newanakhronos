import React from 'react';
import { Button } from '../../components';
import { logo } from '../../constants/images';
import './Hero.scss';

const Hero = () => {
  return (
    <div className="hero" id="hero">
      <div className="hero__container">
        <div className="hero__img-container">
          <img className="hero__img" src={logo} alt="yo" />
        </div>
        <div className="hero__content">
          <h1 className="hero__heading">Anakhronos</h1>
          <p className="hero__desc">
            From a small beginning back in 2001 to being one of the most awaited
            fests of Kolkata,
            <br />
            Anakhronos has always been an occasion to break the monotonous chain
            of college life.
            <br />
            It has always been a gateway to a whole new dimension that redefines
            <br />
            entertainment with events spanning for three days.
          </p>

          <Button
            className="hero__register-btn"
            type="solid"
            text="Register Now"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
