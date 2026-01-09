import React, { useState } from 'react';
import Typing from '../Elements/intro.tsx';
import Popup from '../Elements/Popup.tsx';

const funFacts: string[] = [
    "I like to play the guitar",
    "I like C#",
    "I'm working on a Saas with my friends",
    "I love symphonic metal music",
    "I got two lovebirds birds called Lalo and Nina",
    "I'm in my third year of my study",
    "I'm currently learning WEM and Data modeling",
    "My main guitar is the Schecter Omen 6",
    "I like birds, like a lot",
    "I like to stay far away from PHP"
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
                <h2>fun fact about me</h2>
                <p>{randomFact}</p>
            </Popup>
            </div>
        </div>
        </>
    )
}

export default MainPage;
