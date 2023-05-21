import React from 'react';
import { headerData } from '../data/headerData';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import '../styles/Header.css';
import profileImage from '../images/profile-image.jpeg';

const Header: React.FC = () => {
    const {  jobTitle, name } = headerData;

    return (
        <header className="header">
            <div className="header-left">
                <div className="profile-image-container">
                    <img src={profileImage} alt="Profile" className="profile-image" />
                    <div className="social-icons">
                        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="social-icon" />
                        </a>
                        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="social-icon" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="header-right">
                <div className="header-description">
                    <h1>{name}</h1>
                    <h2 className="job-title">{jobTitle}</h2>
                    <p>
                        Software Engineer with 3 years of experience possesses expertise in multiple programming languages and utilities.<br />
                        Strong understanding of both frontend and backend development allows for efficient work on any aspect of the development process.<br />
                        Good collaboration skills and technical abilities are also present.
                    </p>
                </div>
            </div>
        </header>
    );
};

export default Header;
