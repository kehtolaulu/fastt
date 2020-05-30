import React from 'react';

const Display = ({ handleSubmit, handleChange, isTextRight, text, speed, accuracy }) => (
    <div className="text">
        <p className={`text-container color-${isTextRight}`} >
            {text}
        </p>
        <form onSubmit={handleSubmit}>
            <input className="text-input"
                type="text"
                maxLength="75"
                onChange={handleChange}
                spellCheck="false" />
        </form>
        <p>Speed: {speed} chars/min</p>
        <p>Accuracy: {accuracy} %</p>
    </div>
);

export default Display;
