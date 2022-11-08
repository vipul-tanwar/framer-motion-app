import React, { useCallback } from 'react';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import './App.css';
import particlesOptions from "./particles.json";
import Header from './components/Header/Header.jsx';
import Landing from './components/Landing/Landing';
import Benefits from './components/Benefits/Benefits';
import Footer from './components/Footer/Footer';
function App() {
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])

    return (
        <div className="App">
            <Particles options={particlesOptions} init={particlesInit}>
            </Particles>

            <Header/>
            <Landing/>
            <Benefits/>
            <Footer/>
            {/* <Ring/> */}
        </div>
    );
}

export default App;
