import React, { useState } from 'react';
import { Project } from '../types/types';
import { Link } from 'react-router-dom';
import '../styles/ProjectCard.css';

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleCardFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className={`card ${isFlipped ? 'is-flipped' : ''}`} onClick={handleCardFlip}>
            <div className="card-front">
                <h2 className="project-card-title">{project.title}</h2>
                <img src={project.imageUrl} alt={project.title} />
                <div className="card-text">
                    <p>{project.description}</p>
                </div>
                <Link to={`/projects/${project.id}`} className="learn-more-link">
                    Learn More
                </Link>
            </div>
            <div className="card-back">
                <div className="technologies-list">
                    <h3>Technologies:</h3>
                    <ul>
                        {project.technologies.map((technology, index) => (
                            <li key={index}>{technology}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
