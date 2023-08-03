import React, { useState, useEffect } from 'react';
import { Project } from '../types/types';
import { Link } from 'react-router-dom';
import { getImageByName } from "../utils/imageUtils"; // Update the import path
import '../styles/ProjectCard.css';

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [imageSrc, setImageSrc] = useState<string | null>(null);

    useEffect(() => {
        const fetchImage = async () => {
            const src = await getImageByName({ name: project.imageUrl, alt: project.title });
            setImageSrc(src);
        };
        fetchImage();
    }, [project.imageUrl, project.title]);

    const handleCardFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className={`card ${isFlipped ? 'is-flipped' : ''}`} onClick={handleCardFlip}>
            <div className="card-front">
                <h2 className="project-card-title">{project.title}</h2>
                {imageSrc ? ( // Check if imageSrc is not null before rendering
                    <img src={imageSrc} alt={project.title} />
                ) : (
                    <div>No Image Found</div> // Handle the case when imageSrc is null
                )}
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
