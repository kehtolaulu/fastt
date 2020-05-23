import React from 'react';
import Key from './Key';

const Row = ({ keys }) => (
    <div className="keyboard-row">
        {keys.map(key => (
            <Key
                glyph={key.glyph}
                color={key.color}
                size={key.size}
            />
        ))}
    </div>
);

export default Row;
