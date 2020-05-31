import React from 'react';
import Row from './Row';

const Keyboard = ({ keys, handleLanguageChange }) => (
    <div tabIndex="0" className="keyboard">
        <div className="keyboard-row row-end">
            <select className="language" onChange={handleLanguageChange}>
                <option value="en">EN</option>
                <option value="ru">RU</option>
            </select>
        </div>
        {keys.map((keys, index) => <Row keys={keys} key={index} />)}
    </div >
);

export default Keyboard;
