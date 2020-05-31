import React from 'react';
import Keyboard from './Keyboard';
import keys from '../qwerty';
import { connect } from 'react-redux';
import { setPressedButton, releaseButton, setShift, releaseShift, changeText, nextText, setLanguage } from '../actions';
import Display from './Display';
import accuracy from '../accuracy';
import Speedometer from '../speedometer';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.content = React.createRef();
        this.state = {
            speedometer: new Speedometer(),
            accuracy: 0,
            speed: 0
        };
    }

    get speedometer() {
        return this.state.speedometer;
    }

    handleClick = (key) => {
        if (!this.speedometer.hasStarted()) {
            this.speedometer.start();
        }
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
        this.props.changeText(e.target.value, this.props.text);
        this.setState({ speed: this.speedometer.speed(e.target.value) });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ accuracy: accuracy(e.target.lastElementChild.value, this.props.text) });
        e.target.reset();
        this.setState({ speed: 0 });
        this.props.nextText();
    }

    handleLanguageChange = (e) => {
        this.props.setLanguage(e.target.value.toLowerCase());
    }

    render() {
        return (
            <div className="content"
                ref={this.content}
                onKeyDown={this.handleClick}
                onKeyUp={this.handleRelease}
                onBlur={this.handleBlur}>
                <Display
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    speed={this.state.speed}
                    text={this.props.text}
                    isTextRight={this.props.isTextRight}
                    accuracy={this.state.accuracy}
                    language={this.props.language} />
                <Keyboard keys={keys(this.props.language)} handleLanguageChange={this.handleLanguageChange} />
            </div >
        );
    }
}

const mapStateToProps = state => ({
    pressed: state.pressed,
    text: state.text.text,
    isTextRight: state.isTextRight,
    language: state.text.language
});

const mapDispatchToProps = dispatch => ({
    setPressedButton: (code) => dispatch(setPressedButton(code)),
    releaseButton: (code) => dispatch(releaseButton(code)),
    setShift: () => dispatch(setShift()),
    releaseShift: () => dispatch(releaseShift()),
    changeText: (text, targetText) => dispatch(changeText(text, targetText)),
    nextText: () => dispatch(nextText()),
    setLanguage: (language) => dispatch(setLanguage(language))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
