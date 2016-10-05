import React, { Component } from 'react';
import Codemirror from 'react-codemirror';
import "codemirror/lib/codemirror.css";
import 'codemirror/mode/javascript/javascript';

class Editor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            code: ''
        };
    }
    updateCode(newCode) {
        this.setState({
            code: newCode
        });
    }
    render() {
        let options = {
            lineNumbers: true,
            mode: 'javascript'
        };
        return (
            <Codemirror value={this.state.code} onChange={()=>this.updateCode} options={options} />
        )
    }
}

export default Editor;