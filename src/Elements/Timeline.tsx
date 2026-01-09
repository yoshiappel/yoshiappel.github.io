import "../css/Timeline.css"
import { useState } from 'react';

import '../css/Toggle.css';

import Portfolio from "../assets/POP/Portfolio.pdf"
import OOP from "../assets/POP/OOP.pdf"

function Toggle() {
    const [open, setOpen] = useState(false);

    return (
        <div>
        <button
            className="toggle-btn"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
        >
            {open ? 'Close' : 'Open'}
        </button>

        <div className={`content ${open ? 'open' : ''}`}>
            <a className="link" href={OOP}>OOP</a>
            <a className="link" href={Portfolio} download={Portfolio}>Portfolio</a>
        </div>
        </div>
    );
}

export default function Timeline() {
    return (
        <>
        <div className="timeline">
            <div className="timeline-item">
                <div className="timeline-content">
                <h3>2023</h3>
                <p>game and frontend</p>
                <p>development</p>
                </div>
            </div>

            <div className="timeline-item">
                <div className="timeline-content">
                <h3>2024</h3>
                <p>mobile app development,</p>
                <p>project for external client</p>
                </div>
            </div>

            <div className="timeline-item">
                <div className="timeline-content">
                <h3>2025</h3>
                <p>internship at</p>
                <p>Maarsingh en van Steijn</p>
                </div>
            </div>
        </div>
        <Toggle></Toggle>
        </>
    );
}