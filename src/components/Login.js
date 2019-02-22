import {Message, Button, Form, Modal, Icon, Label} from "semantic-ui-react";
import React, {Component} from "react";

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
        this.props.submitHandler(this.state);
        this.setState({
            email: "",
            password: ""
        })
    }

    render() {

        return (
            <Modal size="small" trigger={<Button basic >Log in</Button>}>
                <Modal.Header>User Log in</Modal.Header>
                <Modal.Content>
                    {this.props.message &&
                    <Message negative>
                        <Message.Header>{this.props.message}</Message.Header>
                    </Message>}
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
                        <br></br><br></br>

                        <Modal.Actions>
                            <Button color='green' inverted>
                                <Icon name='checkmark' /> Log in
                            </Button>
                        </Modal.Actions>
                    </Form>


                </Modal.Content>
            </Modal>
        )
    }
}

export default Login
