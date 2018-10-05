import React from 'react';
import Project from './Project';
import { PROJECTS } from '../helpers/constants';

const Projects = () => {
  return (
    <section id="projects">
      <h1 className="section-title">Projects</h1>
      <ul className="project-list">
        {PROJECTS.map(project => (
          <Project 
            key={project.title}
            project={project}
          />
        ))}
      </ul>
    </section>
  )
}

export default Projects;