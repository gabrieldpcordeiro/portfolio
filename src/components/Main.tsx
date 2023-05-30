import React from 'react';
import '../styles/Main.css';
import Portfolio from "./Portfolio";
import ContactForm from "./ContactForm";



const Main: React.FC = () => {
    return (
        <main>
            <Portfolio/>
            <ContactForm />
        </main>
    );
};

export default Main;
