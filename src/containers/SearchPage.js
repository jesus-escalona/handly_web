import React, {Component} from 'react';
import { Grid, Header, Segment } from "semantic-ui-react";
import {connect} from "react-redux";
import SearchPlaces from "../components/SearchPlaces";
import MoverRow from "../components/MoverRow";
import MoveType from "../components/MoveType";


class SearchPage extends Component {
    render() {
        const { movers, origin, destination } = this.props;
        const companies = movers.map( mover => <MoverRow key={mover.id} mover={mover}/>);
        return (
            <div>
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
                        </Grid.Row>
                    </Grid>
                </Segment>
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
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Segment>
                    <Grid>
                        {companies}
                    </Grid>
                </Segment>
            </div>
        );
    }
}

const mapStateToProps = (state) => (
    {
        user: state.user,
        movers: state.movers,
        origin: state.origin,
        destination: state.destination
    }
);

export default connect(mapStateToProps)(SearchPage);