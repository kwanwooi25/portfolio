import React, { Component } from 'react';
import { NAVLIST } from '../helpers/constants';

class Header extends Component {
  state = {
    isNavOpen: false
  }

  componentDidMount() {
    const header = document.getElementById('header');
    const toTopButton = document.querySelector('.go-to-top');
    const about = document.getElementById('about');
    const skills = document.getElementById('skills');
    const projects = document.getElementById('projects');
    const contact = document.getElementById('contact');
    const footer = document.getElementById('footer');
    const navAbout = document.getElementById('nav-about');
    const navSkills = document.getElementById('nav-skills');
    const navProjects = document.getElementById('nav-projects');
    const navContact = document.getElementById('nav-contact');

    window.addEventListener('scroll', () => {
      if (window.scrollY < about.offsetTop - 100) {
        header.style.top = '-100px';
        toTopButton.style.bottom = '-100px';
      } else {
        header.style.top = 0;
        toTopButton.style.bottom = '10px';
      }

      if (about.offsetTop - 100 <= window.scrollY && window.scrollY < skills.offsetTop - 100) {
        navAbout.classList.add('active');
        navSkills.classList.remove('active');
        navProjects.classList.remove('active');
        navContact.classList.remove('active');
      } else if (skills.offsetTop - 100 <= window.scrollY && window.scrollY < projects.offsetTop - 100) {
        navAbout.classList.remove('active');
        navSkills.classList.add('active');
        navProjects.classList.remove('active');
        navContact.classList.remove('active');
      } else if (projects.offsetTop - 100 <= window.scrollY && window.scrollY < contact.offsetTop - 100) {
        navAbout.classList.remove('active');
        navSkills.classList.remove('active');
        navProjects.classList.add('active');
        navContact.classList.remove('active');
      } else if (contact.offsetTop - 100 <= window.scrollY && window.scrollY < footer.offsetTop - 100) {
        navAbout.classList.remove('active');
        navSkills.classList.remove('active');
        navProjects.classList.remove('active');
        navContact.classList.add('active');
      } else {
        navAbout.classList.remove('active');
        navSkills.classList.remove('active');
        navProjects.classList.remove('active');
        navContact.classList.remove('active');
      }

      this.setState({ isNavOpen: false }, () => {
        this.handleNavToggle();
      });
    });
  }

  handleNavToggle = () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navToggleLines = document.querySelectorAll('.nav-toggle-line');
    const nav = document.querySelector('.nav');

    if (this.state.isNavOpen) {
      navToggle.classList.add('open');
      nav.classList.add('open');
      navToggleLines.forEach(line => line.classList.add('open'));
    } else {
      navToggle.classList.remove('open');
      nav.classList.remove('open');
      navToggleLines.forEach(line => line.classList.remove('open'));
    }
  }

  goToTop = () => {
    window.scroll({ top: 0, behavior: 'smooth' });
  }

  onNavClick = targetID => {
    const target = document.getElementById(targetID);
    this.setState({ isNavOpen: false }, () => {
      this.handleNavToggle();
      window.scroll({ top: target.offsetTop - 100, behavior: 'smooth' });
    });
  }

  onNavToggle = () => {
    this.setState({ isNavOpen: !this.state.isNavOpen }, () => {
      this.handleNavToggle();
    })
  }

  renderNav = navList => {
    return navList.map(({ sectionId, title}) => {
      return (
        <li key={sectionId}>
          <a id={`nav-${sectionId}`} key={sectionId} onClick={() => { this.onNavClick(sectionId) }}>
            {title}
          </a>
        </li>
      )
    })
  }

  render() {
    return (
      <header id="header" className="header">
        <div className="nav-toggle" onClick={this.onNavToggle}>
          <div className="nav-toggle-line"></div>
          <div className="nav-toggle-line"></div>
          <div className="nav-toggle-line"></div>
        </div>
        <nav className="nav">
          <a className="home" onClick={this.goToTop}>
            <svg className="site-logo" viewBox="0 0 500 500">
              <path fill="#f76c6c" d="M317.2,422.8c95.3-0.1,172.6-77.4,172.6-172.8h0.2v-28.8v-28.8V77.2H378.2l-41.9,115.2h38.5V250h-0.2 c0,31.8-25.8,57.6-57.6,57.6h-22.6l-41.9,115.2L317.2,422.8L317.2,422.8z"/>
              <path fill="#374785" d="M125.2,113.2v-36H10v345.6h115.2v-36c12.1,9.3,25.4,17.1,39.7, 23l39.5-108.6c-18.5-9.6-31.2-28.9-31.2-51.2 c0-31.8,25.8-57.6,57.6-57.6H244L286,77.2h-55.2C191,77.2,154.4,90.6,125.2,113.2z"/>
            </svg>
            <svg className="home-icon" viewBox="0 0 512 512">
              <path fill="#374785" d="M512,296l-96-96V56h-64v80l-96-96L0,296v16h64v160h160v-96h64v96h160V312h64V296z"/>
            </svg>
          </a>
          <ul>
            {this.renderNav(NAVLIST)}
          </ul>
        </nav>
        <button className="go-to-top" onClick={this.goToTop}>
          &#8679;
        </button>
      </header>
    )
  }
}

export default Header;