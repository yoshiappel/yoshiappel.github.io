import { useState, useEffect } from 'react';

export default function Typing() {
    const text = "a software developer studying at Firda, Friesland";
    const [displayed, setDisplayed] = useState("");
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const typingSpeed = 80;
    const deletingSpeed = 50;
    const pauseTime = 4000; 

    useEffect(() => {
        var timeout: number | undefined;

        if (!isDeleting && index < text.length) {
        timeout = setTimeout(() => setIndex(index + 1), typingSpeed);
        } else if (!isDeleting && index === text.length) {
        timeout = setTimeout(() => setIsDeleting(true), pauseTime);
        } else if (isDeleting && index > 0) {
        timeout = setTimeout(() => setIndex(index - 1), deletingSpeed);
        } else if (isDeleting && index === 0) {
        setIsDeleting(false);
        }

        setDisplayed(text.slice(0, index));

        return () => clearTimeout(timeout);
    }, [index, isDeleting, text]);

    return (
        <p style={{ textDecoration: "none" }}>
        {displayed}
        </p>
    );
}