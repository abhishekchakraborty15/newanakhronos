import React from 'react';
import { SectionHeading } from '../../components';

import './About.scss';

const About = () => {
  return (
    <div className="about" id="about">
      {/* <SectionHeading title="About The Event" /> */}
      <div className='about_wrapper'>
        <div className='about_1'>
        <h1>About The Event</h1>
        <p>Techno Main Salt Lake, was established in the year of 2001. In the test of time, it has
          stood tall and thrives to be
          better than what it was yesterday. It is a place where
          everyone is motivated to be the best versions of themselves
          and do what they can do their best. A college where everyone believes that practice makes a human perfect,
          our efforts always pay off
          and that dreams do come true</p>
          </div>
          <div className='about_2'>
            <h2>Where</h2>
            <p>Comming Soon...</p>
          </div>
          <div className='about_3'>
          <h2>When</h2>
          <p>Comming Soon...</p>
          </div>
      </div>

    </div>
  );
};

export default About;
