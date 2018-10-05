// modules
import React, { Component } from 'react';

// components
import Header from './Header';
import Skills from './Skills';
import Contact from './Contact';
import Landing from './Landing';
import About from '../components/About';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

class App extends Component {
  componentDidMount() {
    window.addEventListener('scroll', () => {
      const sectionTitles = document.querySelectorAll('.section-title');
      const skillsList = document.querySelectorAll('.skills-list li');
      const projectList = document.querySelectorAll('.project-list li');
      const socialLinks = document.querySelectorAll('.social-links a');

      sectionTitles.forEach(sectionTitle => this.toggleDisplay(sectionTitle));
      skillsList.forEach(li => this.toggleDisplay(li));
      projectList.forEach(li => this.toggleDisplay(li));
      socialLinks.forEach(link => this.toggleDisplay(link));
    });
  }

  toggleDisplay = element => {
    if (element.offsetTop - window.scrollY - window.innerHeight < 0) {
      element.classList.add('show');
    } else {
      element.classList.remove('show');
    }
  }

  render() {
    return (
      <main>
        <Header />
        <Landing />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    );
  }
}

export default App;
