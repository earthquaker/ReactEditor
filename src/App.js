import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Codemirror from 'react-codemirror';
import "codemirror/lib/codemirror.css";
import 'codemirror/mode/javascript/javascript';

class App extends Component {
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
            <div className="App">
                <Codemirror value={this.state.code} onChange={()=>this.updateCode} options={options} />
            </div>
        );
    }
}

export default App;
