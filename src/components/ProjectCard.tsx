import React from 'react';
import { Project } from '../types/types';

import { Link } from 'react-router-dom';


interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <div className="project-card">
            <img src={project.imageUrl} alt={project.title} />
            <h2 className="project-card-title">{project.title}</h2>
            <p>{project.description}</p>
            <Link to={`/projects/${project.id}`} className="learn-more-link">
                Learn More
            </Link>
        </div>
    );
};

export default ProjectCard;
