import React, { Component } from 'react';
import Codemirror from 'react-codemirror';
import "codemirror/lib/codemirror.css";
import 'codemirror/mode/javascript/javascript';

class Editor extends Component {

    render() {
        return (
            <Codemirror value={this.props.code} onChange={this.props.codeChanged.bind(this)} options={this.props.options} />
        )
    }
}

Editor.propTypes = {
    code: React.PropTypes.string.isRequired,
    codeChanged: React.PropTypes.func.isRequired,
    options: React.PropTypes.object.isRequired
};

export default Editor;