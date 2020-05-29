import React from 'react';
import Keyboard from './Keyboard';
import keys from '../qwerty';
import { connect } from 'react-redux';
import { setPressedButton, releaseButton, setShift, releaseShift, changeText } from '../actions';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.content = React.createRef();
    }

    handleClick = (key) => {
        if (key.keyCode === 16) {
            this.props.setShift();
        }
        this.props.setPressedButton(key.keyCode);
    }

    handleRelease = (key) => {
        if (key.keyCode === 16) {
            this.props.releaseShift();
        }
        this.props.releaseButton(key.keyCode);
    }

    handleBlur = () => {
        this.content.current.focus();
    }

    handleChange = (e) => {
        this.props.changeText(e.target.value);
    }

    render() {
        return (
            <div className="content"
                ref={this.content}
                onKeyDown={this.handleClick}
                onKeyUp={this.handleRelease}
                onBlur={this.handleBlur}>
                <div className="text">
                    <p className={`text-container color-${this.props.isTextRight}`} >
                        {this.props.text}
                    </p>
                    <input className="text-input"
                        type="text"
                        maxLength="75"
                        onChange={this.handleChange} />
                </div>
                <Keyboard keys={keys} />
            </div >
        );
    }
}

const mapStateToProps = state => ({
    pressed: state.pressed,
    text: state.text,
    isTextRight: state.isTextRight
});

const mapDispatchToProps = dispatch => ({
    setPressedButton: (code) => dispatch(setPressedButton(code)),
    releaseButton: (code) => dispatch(releaseButton(code)),
    setShift: () => dispatch(setShift()),
    releaseShift: () => dispatch(releaseShift()),
    changeText: (text) => dispatch(changeText(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
