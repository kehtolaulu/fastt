import React from 'react';
import Row from './Row';

const Keyboard = ({ keys }) => (
    <div className="keyboard">
        {keys.map((keys, index) => <Row keys={keys} key={index} />)}
    </div >
);

export default Keyboard;
