import React from 'react';
import {headerData} from '../data/headerData';
import {FaLinkedin, FaGithub} from 'react-icons/fa';
import '../styles/Hero.css';
import profileImage from '../images/profile-image.jpeg';
import {Link} from 'react-scroll';
import {ReactNebula} from "@flodlc/nebula";

const Hero: React.FC = () => {
    const {jobTitle, name} = headerData;
    const Nebulaconfig = {

        "starsCount": 500,
        "starsColor": "#FFFFFF",
        "starsRotationSpeed": 2,
        "cometFrequence": 100,
        "nebulasIntensity": 9,
        "bgColor": "rgb(8,8,8)",
        "sunScale": 0,
        "planetsScale": 0,
        "solarSystemOrbite": 8,
        "solarSystemSpeedOrbit": 0
    }
    return (
        <div className="hero">
            <ReactNebula config={Nebulaconfig}/>
            <div className="hero-card">
                <h1
                    className="gradiant"
                    style={{
                        fontSize: "4rem",
                        marginBottom: "10px",
                    }}
                >
                    Gabriel Cordeiro
                </h1>
                <p>
                    Hello, im a Software Developer | Full Stack Developer
                </p>
                <a className={"button"} href="#projects">
                    <Link
                        activeClass="active"
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={-70} // Adjust the offset to match your header's height if needed
                        duration={500}
                    >
                        <svg
                            height="1em"
                            fill="currentColor"
                            aria-hidden="true"
                            viewBox="0 0 16 16"
                            width="18"
                            style={{marginRight: "14px"}}
                        >
                            <path
                                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                        </svg>
                        Projects
                    </Link>
                </a>
            </div>
        </div>
    );
};

export default Hero;
