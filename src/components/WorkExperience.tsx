import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { workExperiencesData } from '../data/workExperiencesData';

const WorkExperience = () => {
    return (
        <div>
            <h2>Work Experience</h2>
            <VerticalTimeline>
                {workExperiencesData.map((experience, index) => (
                    <VerticalTimelineElement
                        key={index}
                        date={experience.duration}
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title">{experience.company}</h3>
                        <h4 className="vertical-timeline-element-subtitle">{experience.position}</h4>
                        <ul>
                            {experience.responsibilities.map((responsibility, idx) => (
                                <li key={idx}>{responsibility}</li>
                            ))}
                        </ul>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </div>
    );
};

export default WorkExperience;
