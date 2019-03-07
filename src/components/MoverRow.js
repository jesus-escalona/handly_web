import React, {Component} from 'react';
import {Grid, Rating, Button, Header, Label, Form} from 'semantic-ui-react'
import BookNow from "./BookNow";

class MoverRow extends Component {

    render() {
        const {mover, moving} = this.props;
        const quote = parseInt(parseFloat(mover.attributes.bid_factor) * parseInt(moving.attributes.estimate));
        const numberOfReviews = mover.attributes.reputation.filter(review => review.rating).length;
        return (
            <Grid.Row columns={3}>
                <Grid.Column>
                    <Header as='h3' content={mover.attributes.company_name} />
                </Grid.Column>
                <Grid.Column>
                    <Label className='rating'>
                        <Rating icon='star' disabled size='large' defaultRating={mover.attributes.average_rating} maxRating={5} />
                        <Label.Detail>
                            <Header as='h4' content={`(${numberOfReviews}) Reviews`} />
                        </Label.Detail>
                    </Label>
                </Grid.Column>
                <Grid.Column>
                    <Form>
                        <Form.Field inline>
                            <Label>
                            <Button
                                className='estimate'
                                icon='dollar'
                                size='small'
                                label={{ as: 'a', basic: true, pointing: 'left', content: quote }}
                            />
                            </Label>
                            <Label>
                            <BookNow mover={mover}/>
                            </Label>
                        </Form.Field>
                    </Form>
                </Grid.Column>
            </Grid.Row>
        );
    }
}

export default MoverRow;