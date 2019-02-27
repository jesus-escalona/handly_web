import React, {Component, Fragment} from 'react';
import {Container, Dropdown, Header, Button, Grid, Dimmer} from "semantic-ui-react";
import SearchPlaces from "../components/SearchPlaces";
import {moveOptions} from "../moveOptions";
import 'pure-react-carousel/dist/react-carousel.es.css';
import {NavLink} from "react-router-dom";
import ReviewsContainer from "./ReviewsContainer";
import { connect } from 'react-redux'
import {getEstimate} from "../actions/clientThunks";

class Home extends Component {

    state = {
        moveType: '',
        loading: false
    };

    estimateHandler = (e) => {
        e.preventDefault();
        const { origin, destination } = this.props;
        if (this.state.moveType.length && Object.keys(origin).length && Object.keys(destination).length) {
            this.setState({ loading: true });
            const moveObj = {
                origin,
                destination,
                move_type: this.state.moveType
            };

            this.props.getEstimate(moveObj)
        }
    };

    handleHide = () => this.setState({ loading: false })

    render() {
        const { loading } = this.state;
        return (
            <Fragment>
                <Dimmer.Dimmable dimmed={loading}>
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
                                <SearchPlaces type='origin' text='From here'/>
                                <br/>
                                <SearchPlaces type='destination' text='To there'/>
                                <br/>
                                <Dropdown
                                    onChange={(e, data) => this.setState({moveType: data.value})}
                                    fluid
                                    className='icon'
                                    placeholder='Number of items to handle'
                                    labeled
                                    button
                                    icon='truck'
                                    selection
                                    options={moveOptions} />
                            </Grid.Column>
                        </Grid>
                        <br/>
                        <Button
                            onClick={this.estimateHandler}
                            fluid
                            className='estimate'
                            size='huge'
                        >
                            Get me an estimate
                        </Button>
                    </Container>
                </Container>
                <ReviewsContainer {...this.props}/>
                {/*<CompaniesContainer {...this.props}/>*/}
                </Dimmer.Dimmable>
                <Dimmer active={loading} onClickOutside={this.handleHide}>
                    <Header inverted as={'h1'}>Getting you the best prices...</Header>
                    <div className="spinner">
                        <div className="cube1"/>
                        <div className="cube2"/>
                    </div>
                </Dimmer>
            </Fragment>

        );
    }
}

const mapStateToProps = (state) => (
    {
        origin: state.origin,
        destination: state.destination
    }
);

export default connect(mapStateToProps, { getEstimate })(Home);