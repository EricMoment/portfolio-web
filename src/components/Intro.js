import React, { useLayoutEffect, useState, useRef } from "react"
import './Intro.css'

const randomInt = (min, max) => { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export default function Intro() {
  const [windowWidth, setwindowWidth] = useState(0)
  const designDiv = useRef(null)

  useLayoutEffect(() => {
    if (designDiv.current.offsetWidth > 0) {
      setwindowWidth(designDiv.current.offsetWidth)
    }
  }, [])

  return (
    <div className="intro">
      <div className="intro-words">
        <h1 className="intro-words-1">Hola!</h1>
        <h2 className="intro-words-2">My name is Stan Huang. </h2>
        <h2 className="intro-words-3">I am a Full Stack developer from Hong Kong.</h2>
        <h2 className="intro-words-4">I focus on creating applications with clean, elegant and efficient code.</h2>
      </div>
      <div ref={designDiv} className="intro-designs">
        <div className="circle" style={{top: `${randomInt(10, 540)}px`, left: `${randomInt(10, windowWidth - 60)}px`, backgroundColor: `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`}}></div>
        <div className="square" style={{top: `${randomInt(10, 540)}px`, left: `${randomInt(10, windowWidth - 60)}px`, backgroundColor: `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`}}></div>
        <div className="circle" style={{top: `${randomInt(10, 540)}px`, left: `${randomInt(10, windowWidth - 60)}px`, backgroundColor: `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`}}></div>
        <div className="square" style={{top: `${randomInt(10, 540)}px`, left: `${randomInt(10, windowWidth - 60)}px`, backgroundColor: `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`}}></div>
        <div className="circle" style={{top: `${randomInt(10, 540)}px`, left: `${randomInt(10, windowWidth - 60)}px`, backgroundColor: `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`}}></div>
        <div className="square" style={{top: `${randomInt(10, 540)}px`, left: `${randomInt(10, windowWidth - 60)}px`, backgroundColor: `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`}}></div>
        <div className="circle" style={{top: `${randomInt(10, 540)}px`, left: `${randomInt(10, windowWidth - 60)}px`, backgroundColor: `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`}}></div>
        <div className="square" style={{top: `${randomInt(10, 540)}px`, left: `${randomInt(10, windowWidth - 60)}px`, backgroundColor: `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`}}></div>
        <div className="circle" style={{top: `${randomInt(10, 540)}px`, left: `${randomInt(10, windowWidth - 60)}px`, backgroundColor: `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`}}></div>
      </div>
    </div>
  )
}