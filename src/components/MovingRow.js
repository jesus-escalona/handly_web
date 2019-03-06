import React, {Component, Fragment} from 'react';
import {Grid, Rating, Button, Header} from 'semantic-ui-react'
import {connect} from "react-redux";
import {patchRating} from "../actions/clientThunks";


class MovingRow extends Component {

    handleRate = (e,d) => {
        let token = localStorage.getItem("jwt");
        if(token) {

            const obj = {
                rating: d.rating
            };

            this.props.patchRating(obj, token, this.props.moving.id)
        }
    };

    render() {
        const { status, moving_time, distance, final_price, origin_address, origin_administrative, destination_address, destination_administrative, moving_rating, moving_review, mover, move_type } = this.props.moving.attributes;
        const date = new Date(moving_time);
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
                    <Header as='h4' content={date.toDateString()} className='dir'/>
                    <Header as='h4' content={`at ${date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}`} className='dir'/>
                </Grid.Column>
                <Grid.Column width={2}>
                    <Button
                        className='estimate'
                        icon={move_type.icon}
                        size='small'
                        label={{ as: 'a', basic: true, pointing: 'left', content: move_type.moving_type }}
                    />
                </Grid.Column>
                <Grid.Column width={2}>
                    {moving_rating ?
                        <Fragment>
                            <Rating icon='star' disabled size='large' defaultRating={parseInt(moving_rating)} maxRating={5} />
                            <Header as='h5' content={`"${moving_review}"`} />

                        </Fragment>
                        :
                        <Fragment>
                            { status === 'completed' ?
                                <Rating onRate={this.handleRate} icon='star' size='large' defaultRating={0} maxRating={5} />
                                :
                                <Header as='h5' content='You can rate this when it completes'/>}
                        </Fragment>
                    }

                </Grid.Column>
                <Grid.Column width={2}>
                    <Header as='h4' content={`$ ${final_price}`}/>
                </Grid.Column>
                <Grid.Column width={2}>
                    <Header as='h4' content={`${distance} km`}/>
                </Grid.Column>
                <Grid.Column width={2}>
                    <Header as='h4' content={mover.company_name}/>
                </Grid.Column>
            </Grid.Row>
        );
    }
}

export default connect(null, {patchRating})(MovingRow);