import React, {Component, Fragment} from 'react';
import {Container, Dropdown, Header, Search, Button, Grid, Segment} from "semantic-ui-react";
import SearchPlaces from "../components/SearchPlaces";
import {moveOptions} from "../moveOptions";

class Home extends Component {
    render() {
        return (
            <Container fluid className='heading'>
                <video autoPlay loop id="video-background" muted plays-inline>
                    <source
                        src={require("../assets/videos/trucks.mp4")}
                        type="video/mp4"/>
                </video>
                <Container fluid>
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
                </Container>
            </Container>
        );
    }
}

export default Home;