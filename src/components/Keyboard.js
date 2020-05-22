import React from 'react';

function Keyboard() {
    return (
        <div class="keyboard">
            <div class="keyboard-row">
                <div class="key small finger-5">`</div>
                <div class="key finger-5">1</div>
                <div class="key finger-4">2</div>
                <div class="key finger-3">3</div>
                <div class="key finger-2-left">4</div>
                <div class="key finger-2-left">5</div>
                <div class="key finger-2-left">6</div>
                <div class="key finger-2-right">7</div>
                <div class="key finger-3">8</div>
                <div class="key finger-4">9</div>
                <div class="key finger-5">0</div>
                <div class="key finger-5">-</div>
                <div class="key finger-5">+</div>
                <div class="key command">Backspace</div>
            </div>
            <div class="keyboard-row">
                <div class="key command">Tab</div>
                <div class="key finger-5">Q</div>
                <div class="key finger-4">W</div>
                <div class="key finger-3">E</div>
                <div class="key finger-2-left">R</div>
                <div class="key finger-2-left">T</div>
                <div class="key finger-2-right">Y</div>
                <div class="key finger-2-right">U</div>
                <div class="key finger-3">I</div>
                <div class="key finger-4">O</div>
                <div class="key finger-5">P</div>
                <div class="key finger-5">[</div>
                <div class="key finger-5">]</div>
                <div class="key command">\</div>
            </div>
            <div class="keyboard-row">
                <div class="key command">Caps Lock</div>
                <div class="key finger-5">A</div>
                <div class="key finger-4">S</div>
                <div class="key finger-3">D</div>
                <div class="key finger-2-left">F</div>
                <div class="key finger-2-left">G</div>
                <div class="key finger-2-right">H</div>
                <div class="key finger-2-right">J</div>
                <div class="key finger-3">K</div>
                <div class="key finger-4">L</div>
                <div class="key finger-5">;</div>
                <div class="key finger-5">'</div>
                <div class="key command right">Enter</div>
            </div>
            <div class="keyboard-row">
                <div class="key command">Shift</div>
                <div class="key finger-5">Z</div>
                <div class="key finger-4">X</div>
                <div class="key finger-3">C</div>
                <div class="key finger-2-left">V</div>
                <div class="key finger-2-left">B</div>
                <div class="key finger-2-right">N</div>
                <div class="key finger-2-right">M</div>
                <div class="key finger-3">,</div>
                <div class="key finger-4">.</div>
                <div class="key finger-5">/</div>
                <div class="key command right">Shift</div>
            </div>
            <div class="keyboard-row">
                <div class="key grey">Ctrl</div>
                <div class="key grey"></div>
                <div class="key grey">Alt</div>
                <div class="key space"></div>
                <div class="key grey">Alt</div>
                <div class="key grey"></div>
                <div class="key grey">Ctrl</div>
            </div>
        </div >
    );
}

export default Keyboard;
