import {Message, Button, Form, Modal, Icon, Label, Header} from "semantic-ui-react";
import React, {Component} from "react";
import {connect} from "react-redux";
import {signUpUser} from "../actions/clientThunks";

class Signup extends Component {

    state = {
        name: "",
        email: "",
        password: ""
    }

    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault();
        this.props.signUpUser(this.state)
    }

    render() {
        const messages = this.props.messages.map((message, index) => (
                <Message key={index} negative>
                    <Message.Header>{message}</Message.Header>
                </Message>
            )
        )
        return (
            <Modal centered size="tiny" trigger={<Button className='signup' >Sign Up</Button>} onClose={() => this.setState({name: '', email: '', password: ''})}>
                <Modal.Header>
                    <Header textAlign='center' as='h2'>
                        Sign up
                    </Header>
                </Modal.Header>
                <Modal.Content>
                    {messages}
                    <Form onSubmit={this.submitHandler}>
                        <Label pointing="below">Name:</Label>
                        <Form.Input
                            type="text"
                            name="name"
                            placeholder="Name is required"
                            value={this.state.name}
                            onChange={this.changeHandler}
                        />
                        <Label pointing="below">Email:</Label>
                        <Form.Input
                            type="email"
                            name="email"
                            placeholder="Email is required"
                            value={this.state.email}
                            onChange={this.changeHandler}
                        />

                        <Label pointing="below">Password:</Label>
                        <Form.Input
                            type="password"
                            name="password"
                            placeholder="6 characters or more"
                            value={this.state.password}
                            onChange={this.changeHandler}
                        />

                        <br></br>
                        <Modal.Actions>
                            <Button positive fluid floated={'right'}>
                                <Icon name='checkmark' /> Create Account
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

export default connect(mapStateToProps, {signUpUser})(Signup)
