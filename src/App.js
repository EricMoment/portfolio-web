import React from "react";
import './App.css'
import Header from './components/Header';
import Intro from "./components/Intro";
import Project from "./components/Projects";
import Skills from "./components/Skills";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";

function App() {
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
