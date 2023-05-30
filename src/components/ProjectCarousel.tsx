import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Project } from '../types/types';
import ProjectCard from './ProjectCard';
import '../styles/ProjectCarousel.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface ProjectCarouselProps {
    projects: Project[];
}

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ projects }) => {


    return (
        <Carousel showThumbs={true} showIndicators={false}  className="project-carousel">
            {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </Carousel>
    );
};

export default ProjectCarousel;
