import React from 'react';

function Keyboard() {
    return (
        <div class="keyboard">
            <div class="keyboard-row">
                <div class="key small">`</div>
                <div class="key">1</div>
                <div class="key">2</div>
                <div class="key">3</div>
                <div class="key">4</div>
                <div class="key">5</div>
                <div class="key">6</div>
                <div class="key">7</div>
                <div class="key">8</div>
                <div class="key">9</div>
                <div class="key">0</div>
                <div class="key">-</div>
                <div class="key">+</div>
                <div class="key command">Backspace</div>
            </div>
            <div class="keyboard-row">
                <div class="key command">Tab</div>
                <div class="key">Q</div>
                <div class="key">W</div>
                <div class="key">E</div>
                <div class="key">R</div>
                <div class="key">T</div>
                <div class="key">Y</div>
                <div class="key">U</div>
                <div class="key">I</div>
                <div class="key">O</div>
                <div class="key">P</div>
                <div class="key">[</div>
                <div class="key">]</div>
                <div class="key command">\</div>
            </div>
            <div class="keyboard-row">
                <div class="key command">Caps Lock</div>
                <div class="key">A</div>
                <div class="key">S</div>
                <div class="key">D</div>
                <div class="key">F</div>
                <div class="key">G</div>
                <div class="key">H</div>
                <div class="key">J</div>
                <div class="key">K</div>
                <div class="key">L</div>
                <div class="key">;</div>
                <div class="key">'</div>
                <div class="key command right">Enter</div>
            </div>
            <div class="keyboard-row">
                <div class="key command">Shift</div>
                <div class="key">Z</div>
                <div class="key">X</div>
                <div class="key">C</div>
                <div class="key">V</div>
                <div class="key">B</div>
                <div class="key">N</div>
                <div class="key">M</div>
                <div class="key">,</div>
                <div class="key">.</div>
                <div class="key">/</div>
                <div class="key command right">Shift</div>
            </div>
            <div class="keyboard-row">
                <div class="key">Ctrl</div>
                <div class="key"></div>
                <div class="key">Alt</div>
                <div class="key space"></div>
                <div class="key">Alt</div>
                <div class="key"></div>
                <div class="key">Ctrl</div>
            </div>
        </div >
    );
}

export default Keyboard;
