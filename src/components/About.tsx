// About.tsx

import React, { useState, useEffect, useRef } from 'react';
import { About as AboutType } from '../types/types';
import { frontEndSkills, backEndSkills, databaseSkills, otherSkills } from '../data/skillsData';
import { getImageByName } from '../utils/imageUtils';
import '../styles/About.css'; // Import the styles for the About component

interface AboutProps {
    about: AboutType;
}

const About: React.FC<AboutProps> = ({ about }) => {
    const { bio, imageUrl, skills } = about;
    const [imageSrc, setImageSrc] = useState<string | null>(null);
    const aboutRef = useRef<HTMLDivElement | null>(null);
    const skillsRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const fetchImage = async () => {
            const src = await getImageByName({ name: imageUrl, alt: 'My Profile Picture' });
            setImageSrc(src);
        };
        fetchImage();

        const options = {
            threshold: 0.5,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    aboutRef.current?.classList.add('fade-in');
                    skillsRef.current?.classList.add('fade-in');
                } else {
                    aboutRef.current?.classList.remove('fade-in');
                    skillsRef.current?.classList.remove('fade-in');
                }
            });
        }, options);

        if (aboutRef.current) {
            observer.observe(aboutRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, [imageUrl]);

    return (
        <div ref={aboutRef} className="about">
            <h1>About</h1>
            <div className="picture">
                {imageSrc ? (
                    <img src={imageSrc} alt="My Profile Picture" />
                ) : (
                    <div>No Image Found</div>
                )}
            </div>
            <div className="bio">
                <p>{bio}</p>
            </div>
            <div ref={skillsRef} className="skills">
                <h2>Skills</h2>
                <div className="skills-categories">
                    <div className="category">
                        <h3>Front-End</h3>
                        <ul className="skill-list">
                            {frontEndSkills.map((skill, index: number) => (
                                <li key={index}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="category">
                        <h3>Back-End</h3>
                        <ul className="skill-list">
                            {backEndSkills.map((skill, index: number) => (
                                <li key={index}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="category">
                        <h3>Database</h3>
                        <ul className="skill-list">
                            {databaseSkills.map((skill, index: number) => (
                                <li key={index}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="category">
                        <h3>Other</h3>
                        <ul className="skill-list">
                            {otherSkills.map((skill, index: number) => (
                                <li key={index}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
