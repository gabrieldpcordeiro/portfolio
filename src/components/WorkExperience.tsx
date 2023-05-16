import React from 'react';
import { workExperiencesData } from '../data/workExperiencesData';
import {workExperiences} from "../types/types";

const WorkExperience: React.FC = () => {
    return (
        <div>
            <h2>Work Experience</h2>
            <div className="timeline">
                {workExperiencesData.map((workExperience: workExperiences) => (
                    <div key={workExperience.id} className="timeline-item">
                        <div className="timeline-content">
                            <h3>{workExperience.company}</h3>
                            <p>{workExperience.position}</p>
                            {/* Add more details about the work experience */}
                        </div>
                        <div className="timeline-date">{workExperience.duration}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WorkExperience;
