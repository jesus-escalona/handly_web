import React, {Component} from 'react';
import {Header, Image, Segment, Grid, Button, Input} from "semantic-ui-react";
import {connect} from "react-redux";
import {patchUser} from "../actions/clientThunks";

class Profile extends Component {

    state = {
        name: '',
        email: '',
        phone_number: '',
        avatar: ''
    };

    componentDidMount() {
        const { avatar, name, email, phone_number } = this.props.user.attributes;
        this.setState({avatar, email, name, phone_number: phone_number || ''})
    }

    handleChange = (e, data) => {
        this.setState({[data.name]: data.value})
    };

    patchUser = (e) => {
        e.preventDefault();
        this.props.patchUser(this.state, localStorage.getItem('jwt'))
    };


    render() {
        const {avatar, name, email, phone_number} = this.state;
        return (
            <div>
                <Header inverted as={'h1'}>Profile</Header>
                <Segment>
                    <Grid textAlign='center'>
                        <Grid.Row>
                            <Grid.Column width={5}>
                                <Image centered circular size='large' src={avatar} />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={3}>
                                <Header floated='left' as='h3' content='Name:'/>
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <Input name='name' transparent floated='right' value={name} onChange={this.handleChange}/>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={3}>
                                <Header floated='left' as='h3' content='Email:'/>
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <Input type='email' name='email' transparent floated='right' value={email} onChange={this.handleChange}/>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={3}>
                                <Header floated='left' as='h3' content='Phone Number:'/>
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <Input placeholder='Add your number' type='tel' name='phone_number' transparent floated='right' value={phone_number} onChange={this.handleChange}/>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Button
                                onClick={this.patchUser}
                                size='large'
                            >
                                Save
                            </Button>
                        </Grid.Row>
                    </Grid>
                </Segment>
            </div>
        );
    }
}

const mapStateToProps = (state) => (
    {
        user: state.user
    }
);

export default connect(mapStateToProps, { patchUser })(Profile);