import React from "react";
import Header from "./Header";
import Footer from './Footer';
import './Home.css'
import faerielle from './images/faerielle.png'

function Home() {
  return (
    <div className="home">
      <Header />
      <div className='ImgContainer'>
        <img src={faerielle} alt='ilovedher'></img>
      </div>
      <Footer />
    </div>
  )
}

export default Home