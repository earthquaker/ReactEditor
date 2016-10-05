import React, { Component } from 'react';
import Codemirror from 'react-codemirror';
import "codemirror/lib/codemirror.css";
import 'codemirror/mode/javascript/javascript';

import { connect } from 'react-redux';
import * as codeActions from '../actions/codeActions';

class Editor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            code: ''
        };
    }
    componentWillMount() {
        this.props.getCode();
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            code: nextProps.code
        });
    }
    updateCode(newCode) {
        // this.setState({code: newCode}); should i set state before aswell for speed?
        this.props.setCode(newCode);
    }
    render() {
        let options = {
            lineNumbers: true,
            mode: 'javascript'
        };
        return (
            <Codemirror value={this.state.code} onChange={this.updateCode.bind(this)} options={options} />
        )
    }
}

function mapStateToProps(state) {
    console.log(state);
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
export default connect(mapStateToProps, mapDispatchToProps)(Editor);