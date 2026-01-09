import React, { useState } from 'react';
import Typing from '../Elements/intro.tsx';
import Popup from '../Elements/Popup.tsx';

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
        </>
    )
}

export default MainPage;
