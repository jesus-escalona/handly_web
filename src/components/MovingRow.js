import React, {Component, Fragment} from 'react';
import {Grid, Rating, Button, Header, Label, Icon} from 'semantic-ui-react'
import BookNow from "./MoverRow";

class MovingRow extends Component {

    render() {
        const { distance, final_price, origin_address, origin_administrative, destination_address, destination_administrative, moving_rating, moving_review, mover, move_type } = this.props.moving.attributes;
        return (
            <Grid.Row>
                <Grid.Column width={4} textAlign='left'>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={3}>
                                <Header as='h4' content='From:' className='dir'/>
                            </Grid.Column>
                            <Grid.Column width={13}>
                                <Header as='h5' content={`${origin_address}, ${origin_administrative}`} />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={3}>
                                <Header as='h4' content='To:' className='dir'/>
                            </Grid.Column>
                            <Grid.Column width={13}>
                                <Header as='h5' content={`${destination_address}, ${destination_administrative}`} />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Grid.Column>
                <Grid.Column width={2}>
                    <Button
                        className='estimate'
                        icon={move_type.icon}
                        size='small'
                        label={{ as: 'a', basic: true, pointing: 'left', content: move_type.moving_type }}
                    />
                </Grid.Column>
                <Grid.Column width={3}>
                    {moving_rating ?
                        <Fragment>
                            <Rating icon='star' disabled size='huge' defaultRating={parseInt(moving_rating)} maxRating={5} />
                            <Header as='h5' content={`"${moving_review}"`} />

                        </Fragment>
                        :
                        <Fragment>
                            <Header as='h5' content='No ratings yet, be the first one to review' />
                        </Fragment>
                    }

                </Grid.Column>
                <Grid.Column width={2}>
                    <Header as='h4' content={`$ ${final_price}`}/>
                </Grid.Column>
                <Grid.Column width={2}>
                    <Header as='h4' content={`${distance} km`}/>
                </Grid.Column>
                <Grid.Column width={3} textAlign='right'>
                    <Header as='h4' content={mover.company_name}/>
                </Grid.Column>
            </Grid.Row>
        );
    }
}

export default MovingRow;