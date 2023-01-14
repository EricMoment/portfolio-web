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
  useLayoutEffect(() => {
    function measure() {
      if (designDiv.current.offsetWidth > 0) {
        setwindowWidth(designDiv.current.offsetWidth)
      }
    }
    window.addEventListener("resize", measure );
    return () => {
      window.removeEventListener("resize", measure );
    };
  }, [])
  return (
    <div className="intro">
      <div className="intro-words">
        <h1>こんにちは！</h1>
        <h2>My name is Eric Moment. </h2>
        <h2>I am a Nepalese Front End developer.</h2>
        <h2>I focus on creating applications with clean, elegant and efficient code.</h2>
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