import React, {Component} from 'react';
import {Grid, Header, Segment} from "semantic-ui-react";

class MovingsComponent extends Component {
    render() {
        const { movings, text } = this.props;
        return (
            <div>
                <Header inverted as={'h1'}>{text}</Header>
                <br/>
                <Grid textAlign='center'>
                    <Grid.Row>
                        <Grid.Column width={4}>
                            <Header inverted as='h3' content='Locations'/>
                        </Grid.Column>
                        <Grid.Column width={2}>
                            <Header inverted as='h3' content='Date'/>
                        </Grid.Column>
                        <Grid.Column width={2}>
                            <Header inverted as='h3' content='Move Type'/>
                        </Grid.Column>
                        <Grid.Column width={2}>
                            <Header inverted as='h3' content='Rating'/>
                        </Grid.Column>
                        <Grid.Column width={2}>
                            <Header inverted as='h3' content='Price'/>
                        </Grid.Column>
                        <Grid.Column width={2}>
                            <Header inverted as='h3' content='Distance'/>
                        </Grid.Column>
                        <Grid.Column width={2}>
                            <Header inverted as='h3' content='Company'/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Segment>
                    <Grid textAlign='center' verticalAlign='middle' relaxed divided='vertically'>
                        {movings.length ? movings : <Header className='nothing' as='h3' content="Nothing here yet"/>}
                    </Grid>
                </Segment>
            </div>
        );
    }
}

export default MovingsComponent;