import React, {Component} from 'react';
import {Container, Grid, Header, List, Segment} from "semantic-ui-react";

class Footer extends Component {
    render() {
        return (
            <Container fluid>
                <Segment padded raised>
                    <Grid divided textAlign='center'>
                        <Grid.Row>
                            <Grid.Column width={8}>
                                <Header as='h4' content='About' />
                                <List link>
                                    <List.Item as='a'>Contact Us</List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <Header as='h4' content='Services' />
                                <List link>
                                    <List.Item as='a'>Handle it with Handly</List.Item>
                                </List>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
            </Container>
        );
    }
}

export default Footer;