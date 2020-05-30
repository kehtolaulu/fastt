import React from 'react';
import Keyboard from './Keyboard';
import keys from '../qwerty';
import { connect } from 'react-redux';
import { setPressedButton, releaseButton, setShift, releaseShift, changeText, nextText } from '../actions';
import Display from './Display';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.content = React.createRef();
        this.state = {
            speed: 0,
            startTime: 0,
            counter: 0
        };
    }

    handleClick = (key) => {
        if (!this.state.startTime) {
            this.setState({ startTime: Date.now() });
        }
        if (key.keyCode === 16) {
            this.props.setShift();
        }
        this.props.setPressedButton(key.keyCode);
        // скорость в секунду = число кнопочек разделить на время
        this.setState({
            speed: Math.floor(this.state.counter / ((Date.now() - this.state.startTime) / 1000) * 60),
            counter: this.state.counter + 1
        });
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
    }

    handleSubmit = (e) => {
        e.preventDefault();
        e.target.reset();
        this.props.nextText();
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
                    isTextRight={this.props.isTextRight} />
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
    changeText: (text, targetText) => dispatch(changeText(text, targetText)),
    nextText: () => dispatch(nextText())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
