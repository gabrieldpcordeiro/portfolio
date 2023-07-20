import React from 'react';
import './App.css';
import Main from "./components/Main";
import Footer from "./components/Footer";
import Hero from "./components/Hero";


function App() {
    return (
        <div id='home' className="App">
            <Hero/>
            <Main/>
            <Footer/>
        </div>
    );
}

export default App;
