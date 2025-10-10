import React, { useEffect } from 'react';

interface PopupProps {
    visible: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Popup: React.FC<PopupProps> = ({ visible, onClose, children }) => {
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    if (!visible) return null;

    return (
        <div className="popup-overlay" onClick={onClose}>
            <div
                className="popup-content fade-in"
                onClick={(e) => e.stopPropagation()} 
                >
                <button className="close-button" onClick={onClose}>
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
};

export default Popup;
