import React, { Component } from 'react';
import Editor from '../components/Editor.react'

import { connect } from 'react-redux';
import * as codeActions from '../actions/codeActions';

class EditorContainer extends Component {

    state = {
        code: ''
    };

    componentWillMount() {
        this.props.getCode();
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            code: nextProps.code
        });
    }

    codeChanged(newCode) {
        // this.setState({code: newCode}); should i set state before aswell for speed?
        this.props.setCode(newCode);
    }

    render() {
        const options = {
            lineNumbers: true,
            mode: 'javascript'
        };
        return (
            <div>
                <button>New</button>
                <Editor code={this.state.code} codeChanged={this.codeChanged.bind(this)} options={options} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        code: state.code
    };
}
function mapDispatchToProps(dispatch) {
    return {
        getCode: () => dispatch(codeActions.getCode()),
        setCode: (code) => dispatch(codeActions.setCode(code))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(EditorContainer);