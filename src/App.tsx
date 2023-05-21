import React from 'react';
import './App.css';
import Main from "./components/Main";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import {menuData} from "./data/menuData";

function App() {
    return (
        <div id='home' className="App">
            <Navbar  links={menuData}/>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
}

export default App;
