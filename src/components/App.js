import React from 'react';
import Keyboard from './Keyboard';

const App = () => {
    return (
        <div class="content">
            <div class="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
            sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
             like Aldus PageMaker including versions of Lorem Ipsum.</div>
            <Keyboard
                keys={[
                    [
                        { glyph: '`', color: 'finger-5', size: 'small' },
                        { glyph: '1', color: 'finger-5', size: 'key' },
                        { glyph: '2', color: 'finger-4', size: 'key' },
                        { glyph: '3', color: 'finger-3', size: 'key' },
                        { glyph: '4', color: 'finger-2-left', size: 'key' },
                        { glyph: '5', color: 'finger-2-left', size: 'key' },
                        { glyph: '6', color: 'finger-2-left', size: 'key' },
                        { glyph: '7', color: 'finger-2-right', size: 'key' },
                        { glyph: '8', color: 'finger-3', size: 'key' },
                        { glyph: '9', color: 'finger-4', size: 'key' },
                        { glyph: '0', color: 'finger-5', size: 'key' },
                        { glyph: '-', color: 'finger-5', size: 'key' },
                        { glyph: '=', color: 'finger-5', size: 'key' },
                        { glyph: 'Backspace', color: 'grey', size: 'command' }
                    ],
                    [
                        { glyph: 'Tab', color: 'grey', size: 'command' },
                        { glyph: 'Q', color: 'finger-5', size: 'key' },
                        { glyph: 'W', color: 'finger-4', size: 'key' },
                        { glyph: 'E', color: 'finger-3', size: 'key' },
                        { glyph: 'R', color: 'finger-2-left', size: 'key' },
                        { glyph: 'T', color: 'finger-2-left', size: 'key' },
                        { glyph: 'Y', color: 'finger-2-right', size: 'key' },
                        { glyph: 'U', color: 'finger-2-right', size: 'key' },
                        { glyph: 'I', color: 'finger-3', size: 'key' },
                        { glyph: 'O', color: 'finger-4', size: 'key' },
                        { glyph: 'P', color: 'finger-5', size: 'key' },
                        { glyph: '[', color: 'finger-5', size: 'key' },
                        { glyph: ']', color: 'finger-5', size: 'key' },
                        { glyph: '\\', color: 'grey', size: 'command' },
                    ],
                    [
                        { glyph: 'Caps Lock', color: 'finger-5', size: 'command' },
                        { glyph: 'A', color: 'finger-5', size: 'key' },
                        { glyph: 'S', color: 'finger-4', size: 'key' },
                        { glyph: 'D', color: 'finger-3', size: 'key' },
                        { glyph: 'F', color: 'finger-2-left', size: 'key' },
                        { glyph: 'G', color: 'finger-2-left', size: 'key' },
                        { glyph: 'H', color: 'finger-2-right', size: 'key' },
                        { glyph: 'J', color: 'finger-2-right', size: 'key' },
                        { glyph: 'K', color: 'finger-3', size: 'key' },
                        { glyph: 'L', color: 'finger-4', size: 'key' },
                        { glyph: ';', color: 'finger-5', size: 'key' },
                        { glyph: '\'', color: 'finger-5', size: 'key' },
                        { glyph: 'Enter', color: 'grey', size: 'command' },
                    ],
                    [
                        { glyph: 'Shift', color: 'finger-5', size: 'command' },
                        { glyph: 'Z', color: 'finger-5', size: 'key' },
                        { glyph: 'X', color: 'finger-4', size: 'key' },
                        { glyph: 'C', color: 'finger-3', size: 'key' },
                        { glyph: 'V', color: 'finger-2-left', size: 'key' },
                        { glyph: 'B', color: 'finger-2-left', size: 'key' },
                        { glyph: 'N', color: 'finger-2-right', size: 'key' },
                        { glyph: 'M', color: 'finger-2-right', size: 'key' },
                        { glyph: ',', color: 'finger-3', size: 'key' },
                        { glyph: '.', color: 'finger-4', size: 'key' },
                        { glyph: '/', color: 'finger-5', size: 'key' },
                        { glyph: 'Shift', color: 'finger-5', size: 'command' },
                    ], [
                        { glyph: 'Ctrl', color: 'grey', size: 'key' },
                        { glyph: '', color: 'grey', size: 'key' },
                        { glyph: 'Alt', color: 'grey', size: 'key' },
                        { glyph: '', color: 'grey', size: 'space' },
                        { glyph: 'Alt', color: 'grey', size: 'key' },
                        { glyph: '', color: 'grey', size: 'key' },
                        { glyph: 'Ctrl', color: 'grey', size: 'key' }
                    ]]}
            />
        </div>
    );
}

export default App;
