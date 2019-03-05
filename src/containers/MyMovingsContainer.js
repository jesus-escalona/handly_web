import React, {Component} from 'react';
import {Button, Grid, Header, Message, Segment} from "semantic-ui-react";
import {connect} from "react-redux";
import MovingRow from "../components/MovingRow";

class MyMovingsContainer extends Component {

    render() {
        const { movings, user } = this.props;
        const movingsList = movings.map( moving => <MovingRow key={moving.id} moving={moving}/>);
        return (
            <div>
                <Header inverted as={'h1'}>Your Movings</Header>
                <Segment>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={4}>
                                <Header floated='left' as='h3' content='Distance Moved'/>
                            </Grid.Column>
                            <Grid.Column width={4}>
                                <Header floated='left' as='h3' content='Number of Movings Quoted'/>
                            </Grid.Column>
                            <Grid.Column width={5}>
                                <Header floated='left' as='h3' content='Avg spent'/>
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <Header floated='left' as='h3' content='You reviews'/>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
                <br/>
                <Grid textAlign='center'>
                    <Grid.Row>
                        <Grid.Column width={4}>
                            <Header inverted as='h3' content='Locations'/>
                        </Grid.Column>
                        <Grid.Column width={2}>
                            <Header inverted as='h3' content='Move Type'/>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Header inverted as='h3' content='Rating'/>
                        </Grid.Column>
                        <Grid.Column width={2}>
                            <Header inverted as='h3' content='Price'/>
                        </Grid.Column>
                        <Grid.Column width={2}>
                            <Header inverted as='h3' content='Distance'/>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Header inverted as='h3' content='Company'/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Segment>
                    <Grid textAlign='center' verticalAlign='middle' relaxed divided='vertically'>
                        {movingsList}
                    </Grid>
                </Segment>
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