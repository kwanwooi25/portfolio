import React, { Component } from 'react';
import { SKILLS } from '../helpers/constants';

class Skills extends Component {
  componentDidMount() {
    const lis = document.querySelectorAll('.skills-list li');

    lis.forEach(li => {
      const circle = li.querySelector('.ring__circle');
      const info = li.querySelector('.ring__info');
      const circumference = circle.r.baseVal.value * 2 * Math.PI;
      const percentage = Number(info.children[1].textContent) / 100;

      circle.style.strokeDashoffset = circumference;
      circle.style.strokeDasharray = `${circumference} ${circumference}`;

      li.addEventListener('mouseover', () => {
        circle.style.opacity = percentage;
        circle.style.strokeDashoffset = circumference - (percentage * circumference);
      });

      li.addEventListener('mouseout', () => {
        circle.style.strokeDashoffset = circumference;
      });
    });
  }

  renderSkills = skills => {
    return skills.map(({ title, logo, point }) => {
      return (
        <li key={title}>
          <svg
            className="ring"
            width="100%"
            height="100%"
            viewBox="0 0 192 192"
          >
            <circle
              className="ring__circle"
              strokeWidth="15"
              fill="transparent"
              r="86"
              cx="96"
              cy="96"
            />
            <svg className="ring__logo" viewBox="0 0 128 128" width="128" height="128" x="32" y="32">
              {logo}
            </svg>
          </svg>
          <div className="ring__info">
            <h3>{title}</h3>
            <span>{point}</span>
          </div>
        </li>
      )
    })
  }
  
  render() {
    return (
      <section id="skills">
        <h1 className="section-title">Skills</h1>
        <ul className="skills-list">
          {this.renderSkills(SKILLS)}
        </ul>
      </section>
    )
  }
}

export default Skills;