import React from 'react';
import getWord from '../translate';

const Display = ({ handleSubmit, handleChange, isTextRight, text, speed, accuracy, language }) => (
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
        <p>{getWord("speed", language)}: <span>{speed}</span> {getWord("speedUnit", language)}</p>
        <p>{getWord("accuracy", language)}: <span>{accuracy}</span> %</p>
    </div>
);

export default Display;
