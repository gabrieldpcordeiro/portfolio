import React, { useState } from 'react';
import { workExperienceData } from '../data/workExperienceData';
import { workExperiences } from '../types/types';
import '../styles/WorkExperience.css';

const WorkExperience: React.FC = () => {
    const [activeEvent, setActiveEvent] = useState<workExperiences | null>(null);

    const handleEventClick = (event: workExperiences) => {
        setActiveEvent(event);
    };

    return (
        <div className="work-experience">
            <div className="work-timeline">
                {workExperienceData.map((event) => (
                    <div
                        key={event.id}
                        className={`timeline-event ${activeEvent === event ? 'active' : ''}`}
                        onClick={() => handleEventClick(event)}
                    >
                        <div className="event-date">{event.duration}</div>
                        <div className="event-details">
                            <h3>{event.position}</h3>
                            <p>{event.company}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="work-details">
                {activeEvent ? (
                    <>
                        <h2>{activeEvent.position}</h2>
                        <h3>{activeEvent.company}</h3>
                        <ul>
                            {activeEvent.responsibilities.map((responsibility, index) => (
                                <li key={index}>{responsibility}</li>
                            ))}
                        </ul>
                    </>
                ) : (
                    <p>Select an event to view details</p>
                )}
            </div>
        </div>
    );
};

export default WorkExperience;
