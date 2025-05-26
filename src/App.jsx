import { useState } from 'react'
import Dashboard from './Components/Dashboard/Dashboard'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Certifications from './Components/Certifications/Certifications';
import Contact from './Components/Contact/Contact';
import LastBioSection from './Components/LastSection/LastBioSection';


import './App.css'

function App() {


  return (
      <div>
      <section id="home">
         <Dashboard/>
      </section>
      <section id="about">
          <About/>
      </section>
      <section id="projects">
           <Projects/>
      </section>
      <section id="certifications">
           <Certifications/>
      </section>
      <section id="contact">
           <Contact/>
      </section>
       <section id="LastSection">
           <LastBioSection/>
      </section>
    </div>
  )
}

export default App
