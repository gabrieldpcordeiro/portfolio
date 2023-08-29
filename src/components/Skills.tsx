// Skills.tsx

import React from 'react';
import { frontEndSkills, backEndSkills, databaseSkills, otherSkills } from '../data/skillsData'; // Import the skill categories
import '../styles/Skills.css';

const Skills = () => {
    return (
        <div className="skills">
            <h3>Skills</h3>
            <div className="skills-categories">
                <div className="category">
                    <h4>Front-End</h4>
                    <ul className="skill-list">
                        {frontEndSkills.map((skill, index: number) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                </div>
                <div className="category">
                    <h4>Back-End</h4>
                    <ul className="skill-list">
                        {backEndSkills.map((skill, index: number) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                </div>
                <div className="category">
                    <h4>Database</h4>
                    <ul className="skill-list">
                        {databaseSkills.map((skill, index: number) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                </div>
                <div className="category">
                    <h4>Other</h4>
                    <ul className="skill-list">
                        {otherSkills.map((skill, index: number) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Skills;
