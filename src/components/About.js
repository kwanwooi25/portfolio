import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <section id="about">
        <h1 className="section-title">About</h1>
        <div className="about">
          <p>
            I'm a web developer based in Namyangju, Korea (near Seoul). I am about to finish Treehouse Front End Web Development Techdegree and so excited to put all my skills in use! I have passion for being a full-stack developer so I am also open to any opportunity to learn backend development.
          </p>
        </div>
        <button className="button download-button">
          <span>Resume</span>
          <div className="download-icon">
            <svg version="1.1" viewBox="0 0 128 128">
              <polygon className="download-icon__arrow" points="109.3,55.8 83.4,55.8 83.4,17 44.6,17 44.6,55.8 18.7,55.8 64,101.1"/>
              <rect className="download-icon__base" x="18.7" y="114.1" width="90.6" height="12.9"/>
            </svg>
          </div>
        </button>
      </section>
    )
  }
}

export default About;
