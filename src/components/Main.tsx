import React from 'react';
import '../styles/Main.css';
// import Portfolio from "./Portfolio";
import ContactForm from "./ContactForm";
import {menuData} from "../data/menuData";
import Navbar from "./Navbar";
import { AboutData } from "../data/aboutData";
import About from "./About";
import Projects from "./Projects";


const Main: React.FC = () => {
    return (
        <>
            <main>
                <Projects/>

                {AboutData.map((about) => (
                    <About key={about.bio} about={about} />
                ))}
                <ContactForm/>
            </main>
        </>
    );
};

export default Main;
