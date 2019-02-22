import {Message, Button, Form, Modal, Icon, Label} from "semantic-ui-react";
import React, {Component} from "react";

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
        this.props.submitHandler(e, this.state);
        this.setState({
            name: "",
            email: "",
            password: ""
        })
    }

    render() {
        return (
            <Modal size="small" trigger={<Button positive>Sign Up</Button>}>
                <Modal.Header>User Sign Up</Modal.Header>
                <Modal.Content>
                    {this.props.message &&
                    <Message negative>
                        <Message.Header>{this.props.message}</Message.Header>
                    </Message>}
                    <Form onSubmit={this.submitHandler}>
                        <Label pointing="below">Name:</Label>
                        <Form.Input
                            type="text"
                            name="name"
                            placeholder="name"
                            value={this.state.name}
                            onChange={this.changeHandler}
                        />
                        <Label pointing="below">Email:</Label>
                        <Form.Input
                            type="email"
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

                        <br></br><br></br>
                        <Modal.Actions>
                            <Button color='green' inverted center>
                                <Icon name='checkmark' /> Sign Up
                            </Button>
                        </Modal.Actions>
                    </Form>
                </Modal.Content>
            </Modal>
        )
    }
}

export default Signup
