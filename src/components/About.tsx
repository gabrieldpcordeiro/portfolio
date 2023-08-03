import React, { useState, useEffect } from 'react';
import { About as AboutType } from '../types/types';
import { skillsData } from '../data/skillsData';
import { getImageByName } from "../utils/imageUtils"; // Update the import path
import '../styles/About.css';

interface AboutProps {
    about: AboutType;
}

const About: React.FC<AboutProps> = ({ about }) => {
    const { bio, imageUrl, skills } = about;
    const [imageSrc, setImageSrc] = useState<string | null>(null);

    useEffect(() => {
        const fetchImage = async () => {
            const src = await getImageByName({ name: imageUrl, alt: "My Profile Picture" });
            setImageSrc(src);
        };
        fetchImage();
    }, [imageUrl]);

    return (
        <div className="about">
            <div className="picture">
                {imageSrc ? ( // Check if imageSrc is not null before rendering
                    <img src={imageSrc} alt="My Profile Picture" />
                ) : (
                    <div>No Image Found</div> // Handle the case when imageSrc is null
                )}
            </div>
            <div className="bio">
                <p>{bio}</p>
            </div>
            <div className="skills">
                <h2>Skills</h2>
                <ul className="skill-list">
                    {skillsData.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>can u
            </div>
        </div>
    );
};

export default About;
