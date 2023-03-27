import React from "react"
import github from './images/github.png'
import resume from '../resume.pdf'
import resumeJ from '../resume_jis.pdf'
import './Footer.css'

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-links">
        <p><a href="https://github.com/EricMoment"><img src={github} alt="linkedin"></img></a></p>
        <p><a href={resume}><p>CV</p></a></p>
        <p><a href={resumeJ}><p>履歴書</p></a></p>
      </div>  
      <h2>a365900630@gmail.com</h2>
    </div>
  )
}