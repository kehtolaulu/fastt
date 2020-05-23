import React from 'react';

class Key extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: "false"
        };
    }

    render() {
        return (
            <div class={"key " + this.props.size + " " + this.props.color}>
                {this.props.glyph}
            </div >
        );
    }
}

export default Key;
