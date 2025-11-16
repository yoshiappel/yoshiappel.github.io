import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React, { useState } from 'react';

import githublogo from './assets/githublogo.svg'
import linkedinlogo from './assets/linkedinlogo.svg'
import maillogo from './assets/maillogo.svg'

import './App.css'

import Popup from './Popup';
import Header from './Header'
import About from './About.tsx'
import Typing from './intro.tsx'

const funFacts: string[] = [
  "I play the guitar 🎸",
  "I like C#",
  "I have been coding for 5 years",
  "I love metal music 🎶",
  "I got two birds called Lalo and Nina 🦅",
  "I'm in my third year of my study",
  "I'm currently learning WEM and Data modeling"
];

const getRandomFact = () => {
  const index = Math.floor(Math.random() * funFacts.length);
  return funFacts[index];
};

const MainPage: React.FC = () => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [randomFact, setRandomFact] = useState<string>("");

  const handleOpenPopup = () => {
    setRandomFact(getRandomFact());
    setPopupVisible(true);
  };

  return (
    <>
      <section>
        <Header></Header>
      </section>
      <h1 className='title'>hey, I'm Pieter</h1>
      <p className='small'>(i like c#)</p>
      <div id='intro'><Typing></Typing></div>
      <div className="card">
        <p>currently interning at Maarsingh en van Steijn</p>
        <p>interested in game design and UI/UX</p>
        <div>
          <p className="random-fact" onClick={handleOpenPopup}>
            click here for a random fact about me!
          </p>

          <Popup visible={popupVisible} onClose={() => setPopupVisible(false)}>
            <h2>👀 fun fact about me</h2>
            <p>{randomFact}</p>
          </Popup>
        </div>
      </div>
      <p>feel free to contact me via,</p>
      <div className='socials-card'>
        <a href="https://github.com/yoshiappel" target="_blank">
          <img src={githublogo} className="logo" alt="Github logo" />
        </a>
        <a href="&#109;&#097;&#105;&#108;&#116;&#111;&#058;&#112;&#105;&#101;&#116;&#104;&#098;&#111;&#116;&#101;&#114;&#104;&#111;&#101;&#107;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;" target="_blank">
          <img src={maillogo} className="logo" alt="Mail logo" />
        </a>
        <a href="https://linkedin.com/in/piethendrikboterhoek" target="_blank">
          <img src={linkedinlogo} className="logo" alt="Linkedin logo" />
        </a>
      </div>
      <p className="footer">
        developed by Piet
      </p>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
