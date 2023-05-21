import React from 'react';
import { skillsData } from '../data/skillsData';
import '../styles/Skills.css'

const Skills = () => {
    return (
        <div className="skills">
            <h3>Skills</h3>
            <ul className="skill-list">
                {skillsData.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </div>
    );
};

export default Skills;
