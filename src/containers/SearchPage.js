import React, {Component} from 'react';
import {Dropdown, Grid, Header, Segment} from "semantic-ui-react";
import {connect} from "react-redux";
import {moveOptions} from "../moveOptions";
import SearchPlaces from "../components/SearchPlaces";


class SearchPage extends Component {
    render() {
        return (
            <div>
                <Header inverted as={'h1'}>Results</Header>
                <Segment>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={4}>
                                <Header floated='left' as='h3' content='From:'/>
                                <SearchPlaces type='origin' text=''/>
                            </Grid.Column>
                            <Grid.Column width={4}>
                                <Header floated='left' as='h3' content='To:'/>
                                <SearchPlaces type='destination' text=''/>
                            </Grid.Column>
                            <Grid.Column width={5}>
                                <Header floated='left' as='h3' content='Move Type:'/>
                                <Dropdown
                                    onChange={(e, data) => this.setState({moveType: data.value})}
                                    fluid
                                    className='icon'
                                    placeholder=''
                                    labeled
                                    button
                                    icon='truck'
                                    selection
                                    options={moveOptions}
                                />
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
                        <Grid.Row>
                            <Grid.Column width={4}>
                                <Header floated='left' as='h3' content='From:'/>
                                <SearchPlaces type='origin' text=''/>
                            </Grid.Column>
                            <Grid.Column width={4}>
                                <Header floated='left' as='h3' content='To:'/>
                                <SearchPlaces type='destination' text=''/>
                            </Grid.Column>
                            <Grid.Column width={5}>
                                <Header floated='left' as='h3' content='Move Type:'/>
                                <Dropdown
                                    onChange={(e, data) => this.setState({moveType: data.value})}
                                    fluid
                                    className='icon'
                                    placeholder=''
                                    labeled
                                    button
                                    icon='truck'
                                    selection
                                    options={moveOptions}
                                />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
            </div>
        );
    }
}

const mapStateToProps = (state) => (
    {
        user: state.user,
        movers: state.movers
    }
);

export default connect(mapStateToProps)(SearchPage);