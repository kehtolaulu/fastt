import React from 'react';
import { connect } from 'react-redux';

class Key extends React.Component {
    isPressed = (code) => {
        return this.props.pressed.indexOf(code) !== -1;
    }

    render() {
        return (
            <div className={"key " + this.props.size + " " + this.props.color + (this.isPressed(this.props.code) ? " pressed" : "")}>
                {this.props.glyph}
            </div >
        );
    }
}

const mapStateToProps = state => ({
    pressed: state
});

export default connect(mapStateToProps)(Key);
