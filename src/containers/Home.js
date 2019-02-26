import React, {Component, Fragment} from 'react';
import {Container, Dropdown, Header, Button, Grid} from "semantic-ui-react";
import SearchPlaces from "../components/SearchPlaces";
import {moveOptions} from "../moveOptions";
import 'pure-react-carousel/dist/react-carousel.es.css';
import {NavLink} from "react-router-dom";
import CompaniesContainer from "./CompaniesContainer";
import ReviewsContainer from "./ReviewsContainer";

class Home extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid className='heading'>
                    <video autoPlay loop id="video-background" muted>
                        <source
                            src={require("../assets/videos/trucks.mp4")}
                            type="video/mp4"/>
                    </video>
                    <Container className='options' fluid>
                        <Header className='heroTitle' as='h1'>Let us handle it</Header>
                        <br/>
                        <Grid>
                            <Grid.Column>
                                <SearchPlaces text='From here'/>
                                <br/>
                                <SearchPlaces text='To there'/>
                                <br/>
                                <Dropdown fluid className='icon' placeholder='Number of items to handle' labeled button icon='truck' selection options={moveOptions} />
                            </Grid.Column>
                        </Grid>
                        <br/>
                        <Button fluid className='estimate' size='huge'>Get me an estimate</Button>
                    </Container>
                </Container>
                <ReviewsContainer {...this.props}/>
                {/*<CompaniesContainer {...this.props}/>*/}
            </Fragment>

        );
    }
}

export default Home;