import React from 'react';
import { Project } from '../types/types';
import ProjectCard from './ProjectCard';
import '../styles/ProjectCardContainer.css';
import projectCarousel from "./ProjectCardContainer";

interface ProjectCarouselProps {
    projects: Project[];
}

const ProjectCardContainer: React.FC<ProjectCarouselProps> = ({ projects }) => {


    return (
        <div className={"card-container"}>
            {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </div>
    );
};

export default ProjectCardContainer;
