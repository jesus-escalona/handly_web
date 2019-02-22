import React, {Component} from 'react';
import {Container, Dropdown, Header, Search, Button, Grid, Segment} from "semantic-ui-react";
import SearchPlaces from "../components/SearchPlaces";
import {moveOptions} from "../moveOptions";

class Home extends Component {
    render() {
        return (
            <Container fluid>
                <Segment
                    textAlign='center'
                    style={{ minHeight: 300, padding: '1em 0em' }}
                    vertical
                >
                    <Header as='h1'>We will handle it for you.</Header>
                    <br/>
                    <Grid columns='equal'>
                        <Grid.Column>
                            <SearchPlaces text='From here'/>
                        </Grid.Column>
                        <Grid.Column>
                            <SearchPlaces text='To there'/>
                        </Grid.Column>
                        <Grid.Column>
                            <Dropdown fluid className='icon' placeholder='Number of items to handle' labeled button icon='truck' selection options={moveOptions} />
                        </Grid.Column>
                    </Grid>
                    <br/>
                    <Button className='estimate' size='huge'>Get me an estimate</Button>
                </Segment>
            </Container>
        );
    }
}

export default Home;