import React from "react"
import './Header.css'

export default function Header() {
  return (
    <div className="header">
      <a className="header-myName" href="index.html">Eric Moment</a>
      <nav className="header-navi">
        <ul>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#about-me">About Me</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
