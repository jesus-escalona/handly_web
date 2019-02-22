import React, {Component} from 'react';
import {Container, Grid, Header, List, Segment} from "semantic-ui-react";

class Footer extends Component {
    render() {
        return (
            <Segment inverted vertical padded>
                <Container>
                    <Grid divided inverted textAlign='center'>
                        <Grid.Row>
                            <Grid.Column width={8}>
                                <Header inverted as='h4' content='About' />
                                <List link inverted>
                                    <List.Item as='a'>Contact Us</List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <Header inverted as='h4' content='Services' />
                                <List link inverted>
                                    <List.Item as='a'>Get Emotional</List.Item>
                                </List>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </Segment>
        );
    }
}

export default Footer;