import React from 'react';
import ProjectCarousel from './ProjectCarousel';
import {Projects} from '../data/projectData';

const Project = () => {
    return (
        <div id="projects">
            <h1>Projects</h1>
            <ProjectCarousel projects={Projects}/>
        </div>
    );
};

export default Project;
