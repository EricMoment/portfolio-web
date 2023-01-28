import React, {useState} from "react"
import './Skills.css'
import {html, css, js, git, react_Icon, node_Icon, 
  mongodb, express} from './images/techIcons/collection'

export default function Skills() {
  const [htmlIcon, setHtmlIcon] = useState(false)
  const [cssIcon, setCSSIcon] = useState(false)
  const [jsIcon, setJSIcon] = useState(false)
  const [gitIcon, setGitIcon] = useState(false)
  const [reactIcon, setReactIcon] = useState(false)
  const [nodeIcon, setNodeIcon] = useState(false)
  const [mongodbIcon, setMongodbIcon] = useState(false)
  const [expressIcon, setExpressIcon] = useState(false)
  function handleHtmlEnter() {
    setHtmlIcon(true)
  }
  function handleHtmlLeave() {
    setHtmlIcon(false)
  }
  function handleCSSEnter() {
    setCSSIcon(true)
  }
  function handleCSSLeave() {
    setCSSIcon(false)
  }
  function handleJSEnter() {
    setJSIcon(true)
  }
  function handleJSLeave() {
    setJSIcon(false)
  }
  function handleGitEnter() {
    setGitIcon(true)
  }
  function handleGitLeave() {
    setGitIcon(false)
  }
  function handleReactEnter() {
    setReactIcon(true)
  }
  function handleReactLeave() {
    setReactIcon(false)
  }
  function handleNodeEnter() {
    setNodeIcon(true)
  }
  function handleNodeLeave() {
    setNodeIcon(false)
  }
  function handleMongoDBEnter() {
    setMongodbIcon(true)
  }
  function handleMongoDBLeave() {
    setMongodbIcon(false)
  }
  function handleExpressEnter() {
    setExpressIcon(true)
  }
  function handleExpressLeave() {
    setExpressIcon(false)
  }
  return (
    <div id="skills" className="skills">
      <h1>Skills</h1>
      <div className="skill-icons-container">
        <img className={htmlIcon? 'hiddenContent': 'skill-icon'} onMouseEnter={handleHtmlEnter} src={html} alt='Html'></img>
        <div className={htmlIcon? "icon-desc": "icon-desc hiddenContent"} onMouseLeave={handleHtmlLeave}><p>HTML</p></div>
        <img className={cssIcon? 'hiddenContent': 'skill-icon'} onMouseEnter={handleCSSEnter} src={css} alt='CSS'></img>
        <div className={cssIcon? "icon-desc": "icon-desc hiddenContent"} onMouseLeave={handleCSSLeave}><p>CSS</p></div>
        <img className={jsIcon? 'hiddenContent': 'skill-icon'} onMouseEnter={handleJSEnter} src={js} alt='Javascript'></img>
        <div className={jsIcon? "icon-desc": "icon-desc hiddenContent"} onMouseLeave={handleJSLeave}><p>JS</p></div>
        <img className={gitIcon? 'hiddenContent': 'skill-icon'} onMouseEnter={handleGitEnter} src={git} alt='Git'></img>
        <div className={gitIcon? "icon-desc": "icon-desc hiddenContent"} onMouseLeave={handleGitLeave}><p>Git</p></div>
        <img className={reactIcon? 'hiddenContent': 'skill-icon'} onMouseEnter={handleReactEnter} src={react_Icon} alt='React'></img>
        <div className={reactIcon? "icon-desc": "icon-desc hiddenContent"} onMouseLeave={handleReactLeave}><p>React</p></div>
        <img className={nodeIcon? 'hiddenContent': 'skill-icon'} onMouseEnter={handleNodeEnter} src={node_Icon} alt='Node'></img>
        <div className={nodeIcon? "icon-desc": "icon-desc hiddenContent"} onMouseLeave={handleNodeLeave}><p>Node</p></div>
        <img className={mongodbIcon? 'hiddenContent': 'skill-icon'} onMouseEnter={handleMongoDBEnter} src={mongodb} alt='MongoDB'></img>
        <div className={mongodbIcon? "icon-desc": "icon-desc hiddenContent"} onMouseLeave={handleMongoDBLeave}><p>Mongo</p></div>
        <img className={expressIcon? 'hiddenContent': 'skill-icon'} onMouseEnter={handleExpressEnter} src={express} alt='Express'></img>
        <div className={expressIcon? "icon-desc": "icon-desc hiddenContent"} onMouseLeave={handleExpressLeave}><p>Express</p></div>
      </div>
    </div>
  )
}
