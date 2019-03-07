import React, {Component} from 'react';
import {Button, Dimmer, Grid, Header, Message, Segment} from "semantic-ui-react";
import {connect} from "react-redux";
import SearchPlaces from "../components/SearchPlaces";
import MoverRow from "../components/MoverRow";
import MoveType from "../components/MoveType";
import Map from "../components/Map";
import {getEstimate} from "../actions/clientThunks";


class SearchPage extends Component {

    state = {
        loading: false,
        error: ''
    };

    estimateHandler = (e) => {
        e.preventDefault();
        const { origin, destination, moveType } = this.props;
        if (moveType && Object.keys(origin).length && Object.keys(destination).length) {
            this.setState({ loading: true });

            const moveObj = {
                origin,
                destination,
                move_type: moveType
            };

            this.props.getEstimate(moveObj)
                .then(data => {
                    if(data !== undefined) {
                        this.setState({error: data.error})
                    } else {
                        this.handleHide()
                    }
                })
        }
    };

    handleHide = () => this.setState({ loading: false, error: '' });

    render() {
        const { movers, origin, destination, selectedMoving, userExists } = this.props;
        const { loading, error } = this.state;
        const companies = movers.map( mover => <MoverRow key={mover.id} mover={mover} moving={selectedMoving}/>);
        return (
            <div>
                <Dimmer page active={loading} onClickOutside={this.handleHide}>
                    <Header inverted as={'h1'}>{error || 'Getting you the best prices...'}</Header>
                    <div className="spinner">
                        <div className="cube1"/>
                        <div className="cube2"/>
                    </div>
                </Dimmer>
                <Dimmer.Dimmable dimmed={loading}>
                <Header inverted as={'h1'}>Results</Header>
                <Segment>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={4}>
                                <Header floated='left' as='h3' content='From:'/>
                                <SearchPlaces type='origin' text={origin.value}/>
                            </Grid.Column>
                            <Grid.Column width={4}>
                                <Header floated='left' as='h3' content='To:'/>
                                <SearchPlaces type='destination' text={destination.value}/>
                            </Grid.Column>
                            <Grid.Column width={5}>
                                <Header floated='left' as='h3' content='Move Type:'/>
                                <MoveType />
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <Header floated='left' as='h3' content='Search Again'/>
                                <Button
                                    onClick={this.estimateHandler}
                                    fluid
                                    className='estimate'
                                    size='small'
                                >
                                    Search
                                </Button>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
                <Map/>
                <br/>
                <Grid>
                    <Grid.Row columns={3}>
                        <Grid.Column>
                            <Header inverted as='h2' content='Moving Companies'/>
                        </Grid.Column>
                        <Grid.Column>
                            <Header inverted as='h2' content='Rating'/>
                        </Grid.Column>
                        <Grid.Column>
                            <Header inverted as='h2' content='Estimate'/>
                            {!userExists && <Message negative header='Please log in to book'/>}
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Segment>
                    <Grid textAlign='center'>
                        {companies}
                    </Grid>
                </Segment>
                </Dimmer.Dimmable>
            </div>
        );
    }
}

const mapStateToProps = (state) => (
    {
        user: state.user,
        movers: state.movers,
        origin: state.origin,
        destination: state.destination,
        selectedMoving: state.selectedMoving,
        userExists: state.userExists,
        moveType: state.moveType
    }
);

export default connect(mapStateToProps, {getEstimate})(SearchPage);