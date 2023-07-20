import React from 'react';
import '../styles/Main.css';
import Portfolio from "./Portfolio";
import ContactForm from "./ContactForm";
import {menuData} from "../data/menuData";
import Navbar from "./Navbar";


const Main: React.FC = () => {
    return (
        <>
            <main>

                <Portfolio/>
                <ContactForm/>
            </main>
        </>
    );
};

export default Main;
