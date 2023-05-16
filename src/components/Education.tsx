import React from 'react';
import '../styles/Education.css'
import { educationData } from '../data/educationData';

const Education = () => {
    return (
        <div className="education">
            <h3>Education</h3>
            <ul className="education-list">
                {educationData.map((education, index) => (
                    <li key={index}>
                        <h4>{education.institution}</h4>
                        <p>{education.degree}</p>
                        <p>{education.year}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Education;
