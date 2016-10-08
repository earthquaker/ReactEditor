import React, { Component } from 'react';
import Editor from '../components/Editor.react'

import { connect } from 'react-redux';
import * as codeActions from '../actions/codeActions';

import { ButtonToolbar, Button, Navbar, Tabs, Tab } from 'react-bootstrap';

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
                <Navbar fluid fixedTop>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#">Code</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Navbar.Form pullLeft>
                            <ButtonToolbar>
                                <Button>New</Button>
                                <Button>Share</Button>
                                <Button>Save</Button>
                                <Button>Add Library</Button>
                            </ButtonToolbar>
                        </Navbar.Form>
                        <Navbar.Form pullRight>
                            <ButtonToolbar>
                                <Button>Login with Github</Button>
                            </ButtonToolbar>
                        </Navbar.Form>
                    </Navbar.Collapse>
                </Navbar>
                <Tabs defaultActiveKey={2} animation={false} id="uncontrolled-tab-example" style={{margin:"51px 0 0 0"}}>
                    <Tab eventKey={1} title="HTML">HTML</Tab>
                    <Tab eventKey={2} title="JavaScript">
                        <Editor code={this.state.code} codeChanged={this.codeChanged.bind(this)} options={options} />
                    </Tab>
                    <Tab eventKey={3} title="CSS">
                        CSS
                    </Tab>
                </Tabs>
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