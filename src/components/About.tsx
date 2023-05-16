import React, { useState } from 'react';
import PersonalBio from './PersonalBio';
import Skills from './Skills';
import Education from './Education';
import WorkExperience from './WorkExperience';
import '../styles/About.css';

const About: React.FC = () => {
    const [activeTab, setActiveTab] = useState('bio');

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    };

    return (
        <div className="about">
            <div className="about-tabs">
                <button
                    className={`about-tab ${activeTab === 'bio' ? 'active' : ''}`}
                    onClick={() => handleTabClick('bio')}
                >
                    Personal Bio
                </button>
                <button
                    className={`about-tab ${activeTab === 'skills' ? 'active' : ''}`}
                    onClick={() => handleTabClick('skills')}
                >
                    Skills
                </button>
                <button
                    className={`about-tab ${activeTab === 'education' ? 'active' : ''}`}
                    onClick={() => handleTabClick('education')}
                >
                    Education
                </button>
                <button
                    className={`about-tab ${activeTab === 'experience' ? 'active' : ''}`}
                    onClick={() => handleTabClick('experience')}
                >
                    Work Experience
                </button>
            </div>
            {activeTab === 'bio' && <PersonalBio />}
            {activeTab === 'skills' && <Skills />}
            {activeTab === 'education' && <Education />}
            {activeTab === 'experience' && <WorkExperience />}
        </div>
    );
};

export default About;
