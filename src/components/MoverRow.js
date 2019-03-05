import React, {Component} from 'react';
import {Grid, Rating, Button, Header} from 'semantic-ui-react'
import BookNow from "./BookNow";

class MoverRow extends Component {

    render() {
        const {mover, moving} = this.props;
        const quote = parseInt(parseFloat(mover.attributes.bid_factor) * parseInt(moving.attributes.estimate));
        return (
            <Grid.Row columns={3}>
                <Grid.Column>
                    <Header as='h3' content={mover.attributes.company_name} />
                </Grid.Column>
                <Grid.Column>
                    <Rating icon='star' disabled size='huge' defaultRating={mover.attributes.average_rating} maxRating={5} />
                </Grid.Column>
                <Grid.Column>
                    <Grid>
                        <Grid.Row columns={2}>
                            <Grid.Column>
                                <Button
                                    className='estimate'
                                    icon='dollar'
                                    size='small'
                                    label={{ as: 'a', basic: true, pointing: 'left', content: quote }}
                                />
                            </Grid.Column>
                            <Grid.Column>
                                <BookNow mover={mover}/>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Grid.Column>
            </Grid.Row>
        );
    }
}

export default MoverRow;