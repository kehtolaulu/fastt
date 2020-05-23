import React from 'react';
import Row from './Row';

const Keyboard = ({ keys }) => (
    <div class="keyboard">
        <Row keys={keys[0]} />
        <Row keys={keys[1]} />
        <Row keys={keys[2]} />
        <Row keys={keys[3]} />
        <Row keys={keys[4]} />
    </div >
);

export default Keyboard;
