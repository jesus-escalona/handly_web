import {Message, Button, Form, Modal, Icon, Label, Header} from "semantic-ui-react";
import React, {Component} from "react";
import {connect} from "react-redux";
import {loginUser} from "../actions/clientThunks";

class Login extends Component {

    state = {
        email: "",
        password: ""
    }

    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = e => {
        e.preventDefault();
        this.props.loginUser(this.state);
    }

    render() {
        const messages = this.props.messages.map((message, index) => (
                <Message key={index} negative>
                    <Message.Header>{message}</Message.Header>
                </Message>
            )
        )
        return (
            <Modal centered size="tiny" trigger={<Button className='login' >Log in</Button>} onClose={() => this.setState({email: '', password: ''})}>
                <Modal.Header>
                    <Header textAlign='center' as='h2'>
                        Log in
                    </Header>
                </Modal.Header>
                <Modal.Content>
                    {messages}
                    <Form onSubmit={this.submitHandler}>
                        <Label pointing="below">Email:</Label>
                        <Form.Input
                            type="text"
                            name="email"
                            placeholder="email"
                            value={this.state.email}
                            onChange={this.changeHandler}
                        />
                        <Label pointing="below">Password:</Label>
                        <Form.Input
                            type="password"
                            name="password"
                            placeholder="password"
                            value={this.state.password}
                            onChange={this.changeHandler}
                        />
                        <br></br>

                        <Modal.Actions>
                            <Button positive fluid floated={'right'}>
                                <Icon name='checkmark' /> Enter
                            </Button>
                            <br/>
                            <br/>
                        </Modal.Actions>
                    </Form>


                </Modal.Content>
            </Modal>
        )
    }
}

const mapStateToProps = (state) => (
    {
        messages: state.messages
    }
);

export default connect(mapStateToProps, {loginUser})(Login)
