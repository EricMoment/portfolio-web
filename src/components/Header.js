import React from "react"
import './Header.css'

export default function Header() {
  return (
    <div className="header">
      <a className="header-myName" href="index.html">Stan<b> Huang</b></a>
      <nav className="header-navi">
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#about-me">About Me</a>
      </nav>
    </div>
  )
}
