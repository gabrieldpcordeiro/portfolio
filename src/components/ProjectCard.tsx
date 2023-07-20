import React from 'react';
import {Project} from '../types/types';
import {Link} from 'react-router-dom';
import "../styles/ProjectCard.css"

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({project}) => {
    return (
        <div className="card">
            <h2 className="project-card-title">{project.title}</h2>
            <img src={project.imageUrl} alt={project.title}/>
            <div className="card-text">
                <p>{project.description}</p>
            </div>
            <div className="additional-text"> {project.technologies} </div>
            <Link to={`/projects/${project.id}`} className="learn-more-link">
                Learn More
            </Link>
        </div>
    );
};

export default ProjectCard;
