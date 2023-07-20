import React from 'react';
import ProjectCardContainer from './ProjectCardContainer';
import {Projects} from '../data/projectData';
const Project = () => {
    return (
        <div id="projects">
            <h1>Projects</h1>
            <ProjectCardContainer projects={Projects}/>
        </div>
    );
};

export default Project;
