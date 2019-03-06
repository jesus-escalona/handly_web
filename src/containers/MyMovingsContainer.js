import React, {Component} from 'react';
import {Button, Container, Grid, Header, Message, Rating, Segment} from "semantic-ui-react";
import {connect} from "react-redux";
import MovingRow from "../components/MovingRow";
import MovingsComponent from "../components/MovingsComponent";

class MyMovingsContainer extends Component {

    render() {
        const { movings, user } = this.props;

        const pendingMovings = movings.filter(moving => moving.attributes.status === 'pending');
        const completedMovings = movings.filter(moving => moving.attributes.status === 'completed');

        const pendingMovingsList = pendingMovings.map(moving => <MovingRow key={moving.id} moving={moving}/>);
        const completedMovingsList = completedMovings.map(moving => <MovingRow key={moving.id} moving={moving}/>);

        const totalDistance = completedMovings.map(moving => parseFloat(moving.attributes.distance)).reduce((a,c) => a+c, 0);
        const totalSpent = completedMovings.map(moving => parseFloat(moving.attributes.final_price)).reduce((a,c) => a+c, 0);
        const avgRatings = completedMovings.map(moving => parseInt(moving.attributes.moving_rating)).reduce((a,c) => a+c, 0)/completedMovings.length;

        return (
            <div>
                <Header inverted as={'h1'}>Moving Stats</Header>
                <Segment>
                    <Grid textAlign='center'>
                        <Grid.Row>
                            <Grid.Column width={4}>
                                <Header as='h3' content='Distance moved:'/>
                                <Header className='dir' as='h3' content={`${totalDistance} km`}/>
                            </Grid.Column>
                            <Grid.Column width={4}>
                                <Header as='h3' content='Movings made:'/>
                                <Header className='dir' as='h3' content={completedMovings.length}/>
                            </Grid.Column>
                            <Grid.Column width={4}>
                                <Header as='h3' content='Total spent:'/>
                                <Header className='dir' as='h3' content={`$ ${totalSpent}`}/>
                            </Grid.Column>
                            <Grid.Column width={4}>
                                <Header as='h3' content='Avg rating:'/>
                                {completedMovings.length ?
                                    <Rating icon='star' disabled size='huge' defaultRating={avgRatings} maxRating={5} />
                                    :
                                    <Header className='dir' as='h3' content='No ratings yet'/>
                                }
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
                <br/>
                <MovingsComponent text='Upcoming Movings' movings={pendingMovingsList}/>
                <br/>
                <br/>
                <MovingsComponent text='Completed Movings' movings={completedMovingsList}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => (
    {
        user: state.user,
        movings: state.movings
    }
);

export default connect(mapStateToProps)(MyMovingsContainer);