import React, { Component } from 'react';

class Landing extends Component {
  state = {
    subTitleIndex: 1
  }

  componentDidMount() {
    const subTitles = document.querySelectorAll('.landing__subtitle li');

    setInterval(() => {
      const { subTitleIndex } = this.state;
      subTitles.forEach(li => li.classList.remove('show'));

      subTitles[subTitleIndex].classList.add('show');
      if (subTitleIndex === 3) {
        this.setState({ subTitleIndex: 0 });
      } else {
        this.setState({ subTitleIndex: subTitleIndex + 1 });
      }
    }, 4000);
  }

  onArrowsClick = () => {
    document.getElementById('about').scrollIntoView({ block: 'start', behavior: 'smooth' });
  }

  render() {
    return (
      <section id="landing">
        <svg className="landing__logo" viewBox="0 0 700 700">
          <g className="logo-fill" clipPath="url(#kj)">
            <path className="logo__bar" d="M511.2,39.3c-13.2-6.8-27.1-12.9-41.4-18.2c-14.4-5.2-28.9-9.5-43.4-12.7L188.8,660.7 c13.2,6.8,27.1,12.9,41.4,18.2c14.4,5.2,28.9,9.5,43.4,12.7L511.2,39.3z"/>
            <path className="logo__fill-1" d="M426.3,8.4C257.1-29.6,82,63,21.1,230.3s13.7,350.8,167.7,430.4L426.3,8.4z"/>
            <path className="logo__fill-2" d="M511.2,39.3L273.7,691.6c169.2,38,344.3-54.7,405.2-221.9C739.8,302.4,665.2,118.9,511.2,39.3z"/>
          </g>
          <defs>
            <clipPath id="kj">
              <path className="logo__clip-path" d="M580,170H310c-41.4,0-79.6,14-110,37.5V170H80v360h120v-37.5C230.4,516,268.6,530,310,530h90v0 c99.3-0.1,179.7-80.7,179.7-180h0.3v-30v-30V170z M460,350h-0.3c0,33.1-26.9,60-60,60H310c-33.1,0-60-26.9-60-60s26.9-60,60-60h150 V350z"/>
            </clipPath>
          </defs>
        </svg>
        <p className="landing__title">
          Kwanwoo Jeong
        </p>
        <ul className="landing__subtitle">
          <li className="show">
            <span>Web Developer</span>
            <div className="line"></div>
          </li>
          <li>
            <span>FrontEnd Developer</span>
            <div className="line"></div>
          </li>
          <li>
            <span>JavaScript Developer</span>
            <div className="line"></div>
          </li>
          <li>
            <span>React Developer</span>
            <div className="line"></div>
          </li>
        </ul>
        <button className="arrows" onClick={this.onArrowsClick}>
          <div className="arrow"></div>
          <div className="arrow-shadow"></div>
        </button>
      </section>
    )
  }
}

export default Landing;