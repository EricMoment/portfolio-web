import React from "react"
import linkedin from './images/linkedin.png'
import github from './images/github.png'
import cv from './images/cv.png'
import './Footer.css'

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-links">
        <p><a href="https://www.linkedin.com/in/alexandre-dev/"><img src={linkedin} alt="linkedin"></img></a></p>
        <p><a href="https://github.com/EricMoment"><img src={github} alt="linkedin"></img></a></p>
        <p><a href="index.html"><img src={cv} alt="cv"></img></a></p>
      </div>
      <h2>a365900630@gmail.com</h2>
    </div>
  )
}