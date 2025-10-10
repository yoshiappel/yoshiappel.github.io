import githublogo from './assets/githublogo.svg'
import linkedinlogo from './assets/linkedinlogo.svg'
import maillogo from './assets/maillogo.svg'
import './App.css'
import React, { useState } from 'react';
import Popup from './Popup';

const funFacts: string[] = [
  "I play the guitar 🎸",
  "I like C#",
  "I have been coding for 5 years",
  "I love metal music 🎶",
  "I don't like php and java",
  "I got two birds called Lalo and Nina 🦅",
  "I'm in my third year of my study",
  "I'm currently learning WEM and Data modeling"
];

const getRandomFact = () => {
  const index = Math.floor(Math.random() * funFacts.length);
  return funFacts[index];
};

const App: React.FC = () => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [randomFact, setRandomFact] = useState<string>("");

  const handleOpenPopup = () => {
    setRandomFact(getRandomFact());
    setPopupVisible(true);
  };

  return (
    <>
      <h1 className='title'>hey, I'm Pieter</h1>
      <p className='small'>(i like c#)</p>
        <p>
          a software developer studying at Firda <br></br>
          Friesland, The Netherlands
        </p>
      <div className="card">
        <p>currently interning at Maarsingh en van Steijn</p>
        <p>I'm interested in game development</p>
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
        <a href="mailto:piethboterhoek@gmail.com" target="_blank">
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

export default App
