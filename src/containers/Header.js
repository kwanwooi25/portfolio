import React, { Component } from 'react';
import { NAVLIST } from '../helpers/constants';

class Header extends Component {
  state = {
    isNavOpen: false,
    lastScrollTop: 0
  }

  componentDidMount() {
    const header = document.getElementById('header');
    const toTopButton = document.querySelector('.go-to-top');
    const about = document.getElementById('about');
    
    window.addEventListener('scroll', () => {
      let direction = '';
      if (window.scrollY > this.state.lastScrollTop) {
        direction = 'down';
      } else {
        direction = 'up';
      }

      if (window.scrollY < about.offsetTop || direction === 'down') {
        header.style.top = '-100px';
        toTopButton.style.bottom = '-100px';
      } else {
        header.style.top = 0;
        toTopButton.style.bottom = '10px';
      }

      this.setState({
        isNavOpen: false,
        lastScrollTop: window.scrollY
      }, () => {
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
      window.scroll({ top: target.offsetTop, behavior: 'smooth' });
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
          <a key={sectionId} onClick={() => { this.onNavClick(sectionId) }}>
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