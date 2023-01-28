import React from "react"
import './AboutMe.css'
import face from './images/face.png'

export default function AboutMe() {

  return (
    <div id="about-me" className="about-me">
      <h1>About Me</h1>
      <div className="about-me-contents">
        <div className="about-me-photo">
          <img src={face} alt='self-portrait' className="self-portrait"></img>
        </div>
        <div className="about-me-self-eval">
          Greetings! I am Stan Huang, a Junior Web Engineer from Hong Kong. 
          I graduated in Accounting and worked in the industry for a year before thinking of changing my career to Web Development. 
          I learned HTML, CSS, React, NodeJS by reading and following tutorials online.
          I love using data and logic to tackle problems, and programming helps to do exactly that. 
          I am excited to pursue a position as a Junior Web Engineer and apply my skills in developing and maintaining web services.
          Meanwhile, I am learning Japanese to adapt to life in Japan.
        </div>
      </div>
    </div>
  )
}