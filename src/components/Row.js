import React from 'react';
import Key from './Key';

const Row = ({ keys }) => (
    <div className="keyboard-row">
        {keys.map((key, index) => (
            <Key
                key={index}
                glyph={key.glyph}
                color={key.color}
                size={key.size}
                code={key.code}
                upperGlyph={key.upperGlyph}
            />
        ))}
    </div>
);

export default Row;
