import React, { Component } from 'react';
import './styles/App.css';
import EditorContainer from './containers/Editor.container.react';

class App extends Component {
    render() {
        return (
            <div className="App">
                <EditorContainer />
            </div>
        );
    }
}

export default App;