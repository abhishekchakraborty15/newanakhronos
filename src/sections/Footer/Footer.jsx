import React from 'react';
import { logo } from '../../constants/images';

import {
  facebookLogo,
  instagramLogo,
  youtubelogo,
  twitterlogo,
} from '../../constants/images';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="app__section footer" id="footer">
      <div className="app__section-container footer-container">
        <div className="footer-1">
          <div className="contact-about">
            <div className="footer-logo">
              <img src={logo} alt="" />
            </div>
            <div className="footer-detail">
              <p>
                Techno Main Salt Lake, was established in the year of 2001. In
                the test of time, it has stood tall and thrives to be better
                than what it was yesterday. It is a place where everyone is
                motivated to be the best versions of themselves and do what they
                can do their best. A college where everyone believes that
                practice makes a human perfect, our efforts always pay off and
                that dreams do come true
              </p>
            </div>
          </div>
          <div className="contact-us">
            <div className="contact-us-detail">
              <h1>Team Ankuran</h1>
              <h3>Techno Main Salt Lake</h3>
              <h3>Kolkata - 700091, West Bengal.</h3>
              <h3>Phone No. : 033-23575683/84/86</h3>
              <h3>Email : tmsl.team.ankuran@gmail.com</h3>
            </div>
            <div className="contact-us-logo">
              <img src={facebookLogo} alt="" />
              <img src={youtubelogo} alt="" />
              <img src={twitterlogo} alt="" />
              <img src={instagramLogo} alt="" />
            </div>
          </div>
        </div>

   

        <div className="footer-2">
          <h1>ANAKHRONOS Copyright © 2021</h1>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
