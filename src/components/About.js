import React from 'react';
import Resume from '../assets/kw-resume.pdf';

const About = () => {

  return (
    <section id="about">
      <h1 className="section-title">About</h1>
      <div className="about">
        <p>
          I am a frontend web developer at <a href="https://www.studiomate.kr" target="_blank" rel="noopener noreferrer">StudioMate</a> located in Seoul, Korea. I love to code and learn new things! Please feel free to look around and get in touch!
        </p>
      </div>
      <button className="button download-button" onClick={() => { window.open(Resume, '_blank') }}>
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

export default About;
