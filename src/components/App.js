import React from 'react';
import Keyboard from './Keyboard';
import keys from '../qwerty';
import { connect } from 'react-redux';
import { setPressedButton, releaseButton } from '../actions';

class App extends React.Component {
    handleClick = (key) => {
        this.props.setPressedButton(key.keyCode);
    }

    handleRelease = (key) => {
        this.props.releaseButton(key.keyCode);
    }

    render() {
        return (
            <div className="content"
                tabIndex="0"
                onKeyDown={(key) => this.handleClick(key)}
                onKeyUp={(key) => this.handleRelease(key)}
            >
                <div className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
             like Aldus PageMaker including versions of Lorem Ipsum.</div>
                <Keyboard keys={keys} />
            </div >
        );
    }
}

const mapStateToProps = state => ({
    pressed: state
});

const mapDispatchToProps = dispatch => ({
    setPressedButton: (code) => dispatch(setPressedButton(code)),
    releaseButton: (code) => dispatch(releaseButton(code))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
