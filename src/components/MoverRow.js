import React, {Component} from 'react';
import {Grid, Rating} from 'semantic-ui-react'
class MoverRow extends Component {
    render() {
        const {mover} = this.props;
        return (
            <Grid.Row columns={3}>
                <Grid.Column>
                    {mover.attributes.company_name}
                </Grid.Column>
                <Grid.Column>
                    <Rating icon='star' size='huge' defaultRating={mover.attributes.average_rating} maxRating={5} />
                </Grid.Column>
                <Grid.Column>
                    {mover.attributes.reputation.review}
                </Grid.Column>
            </Grid.Row>
        );
    }
}

export default MoverRow;