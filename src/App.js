import React, { Component } from 'react';
import './styles/App.css';
import Editor from './components/Editor.react';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Editor />
            </div>
        );
    }
}

export default App;