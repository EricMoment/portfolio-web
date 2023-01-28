import React from "react"
import { useInView } from "react-intersection-observer" //https://www.npmjs.com/package/react-intersection-observer
import './Projects.css'

export default function Project() {
  const [ref, inView] = useInView({triggerOnce: true, threshold: 0})

  return (
    <div id="projects" className="projects" ref={ref}>
      <h1>Projects</h1>
      <div className="project">
        <div className={inView? "project-texts project-animate-left" : "project-texts"}>
          <a className="project-title" href="https://ericmoment.github.io/message-board-front/">Message Board</a>
          <div className="project-description">
              A message board where people can post anything they like! 
              Registered users can edit and delete their messages.
              Guests, however, cannot and their messages will be deleted in 30 minutes.
          </div>
          <div className="project-skills">
            <strong>Tools used:</strong> MongoDB, Express, React, NodeJS, CSS, HTML, <a href="https://github.com/EricMoment/message-board-front">GitHub</a>
          </div>
        </div>
        <a className={inView? "project-preview message-board project-animate-right" : "project-preview message-board"} href="https://ericmoment.github.io/message-board-front/"> </a>
      </div>

      <div className="project">
        <div className={inView? "project-texts project-animate-left" : "project-texts"}>
          <a className="project-title" href="https://ericmoment.github.io/cs-sim/">Chaos Scroll Simulator </a>
          <div className="project-description">
              A web app simulating the results of a MapleStory Scroll that modifies a gear's stats. 
              Try to roll as high value as possible for free!
              Also providing contexts and statistics.
          </div>
          <div className="project-skills">
            <strong>Tools used:</strong> React, CSS, HTML, <a href="https://github.com/EricMoment/cs-sim/tree/main">GitHub</a>
          </div>
        </div>
        <a className={inView? "project-preview cs-sim project-animate-right" : "project-preview cs-sim"} href="https://ericmoment.github.io/cs-sim/"> </a>
      </div>
      <div className="project">
        <div className={inView? "project-texts project-animate-left" : "project-texts"}>
          <a className="project-title" href="https://ericmoment.github.io/Battleship/">Battleship</a>
          <div className="project-description">
            A game of Battleship playing against simple AI. Computer's ships will be placed on the right for you to hit.
            Unsunk ships are colored and placed in the middle.
          </div>
          <div className="project-skills"><strong>Tools used:</strong> Javascript, CSS, HTML, <a href="https://github.com/EricMoment/Battleship">GitHub</a></div>
        </div>
        <a className={inView? "project-preview battleship project-animate-right" : "project-preview battleship"} href="https://ericmoment.github.io/Battleship/"> </a>
      </div>
      <div className="project">
        <div className={inView? "project-texts project-animate-left" : "project-texts"}>
          <a className="project-title" href="https://ericmoment.github.io/Simple-Weather-App/">Weather App</a>
          <div className="project-description">A web app that shows a city's weather today and the future 3 days. A rotation of 10 cities will be shown every 10 seconds. You can also search a city's weather.</div>
          <div className="project-skills"><strong>Tools used:</strong> Javascript, CSS, HTML, JSON, Weather API, <a href="https://github.com/EricMoment/Simple-Weather-App">GitHub</a></div>
        </div>
        <a className={inView? "project-preview weather project-animate-right" : "project-preview weather"} href="https://ericmoment.github.io/Simple-Weather-App/"> </a>
      </div>
      <div className="project-title more">And More..</div>
    </div>
  )
}