import React, {useEffect, useState} from "react";
import './App.css'
import Header from './components/Header';
import Intro from "./components/Intro";
import Project from "./components/Projects";
import Skills from "./components/Skills";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import fae from './components/images/faerielle.png'

function App() {
  const [intro, setIntro] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIntro(false)
    }, 1000);
  }, [])
  
  if (intro) {
    return (
      <div className="app">
        <div className='ImgContainer'>
          <img src={fae} alt='ilovedher'></img>
        </div>
      </div>
    )
  }
  return (
    <div className="app">
      <Header />
      <Intro />
      <Project />
      <Skills />
      <AboutMe />
      <Footer />
    </div>
  )
}

export default App;
