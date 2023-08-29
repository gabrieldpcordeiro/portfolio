import React, { useState, useEffect, useRef } from 'react';
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
    const cardRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const fetchImage = async () => {
            const src = await getImageByName({ name: project.imageUrl, alt: project.title });
            setImageSrc(src);
        };
        fetchImage();
    }, [project.imageUrl, project.title]);

    useEffect(() => {
        const checkVisibility = () => {
            if (cardRef.current) {
                const rect = cardRef.current.getBoundingClientRect();
                const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
                setIsVisible(isVisible);
            }
        };

        // Add event listener to check visibility when scrolling
        window.addEventListener('scroll', checkVisibility);
        checkVisibility(); // Initial check

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', checkVisibility);
        };
    }, []);
    const handleCardFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className={`card ${isFlipped ? 'is-flipped' : ''} ${isVisible ? 'fade-in-on-scroll fade-in-active' : ''}`} onClick={handleCardFlip} ref={cardRef}>
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
