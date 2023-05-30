import React from 'react';
import '../styles/Portfolio.css';
import Projects from "./Projects";
import About from "./About";
const Portfolio: React.FC = () => {


    return (
        <div className="portfolio-container">
            <Projects/>
            <About/>
        </div>
    );
};

export default Portfolio;
