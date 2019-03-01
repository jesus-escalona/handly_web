import React, {Component} from 'react';
import {Header, Image, Segment, Grid, Button, Input} from "semantic-ui-react";
import {connect} from "react-redux";

class Profile extends Component {
    render() {
        const { user } = this.props;
        return (
            <div>
                <Header inverted as={'h1'}>Profile</Header>
                <Segment>
                    <Grid textAlign='center'>
                        <Grid.Row>
                            <Grid.Column width={5}>
                                <Image centered circular size='large' src={user.attributes.avatar} />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={3}>
                                <Header floated='left' as='h3' content='Name:'/>
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <Input transparent floated='right' value={user.attributes.name}/>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={3}>
                                <Header floated='left' as='h3' content='Email:'/>
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <Input transparent floated='right' value={user.attributes.email}/>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={3}>
                                <Header floated='left' as='h3' content='Phone Number:'/>
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <Input transparent floated='right' value={user.attributes.phone_number}/>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Button
                                onClick={console.log}
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

export default connect(mapStateToProps, {})(Profile);