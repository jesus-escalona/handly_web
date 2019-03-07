import React, {Component, Fragment} from 'react';
import {Grid, Rating, Button, Header, Modal, Container, Form, TextArea, Icon} from 'semantic-ui-react'
import {connect} from "react-redux";
import {patchRating} from "../actions/clientThunks";


class MovingRow extends Component {

    state = {
        modalOpen: false,
        rating: 0,
        review: ''
    };

    handleChange = (e,d) => {
        this.setState({review: d.value})
    };

    handleRate = () => {
        let token = localStorage.getItem("jwt");
        if(token) this.props.patchRating(this.state, token, this.props.moving.id).then(this.handleClose)
    };

    handleOpen = (e, d) => {
        this.setState({ modalOpen: true, rating: d.rating });
    };

    handleClose = () => this.setState({ modalOpen: false, rating: 0, review: '' });

    render() {
        const { status, moving_time, distance, final_price, origin_address, origin_administrative, destination_address, destination_administrative, moving_rating, moving_review, mover, move_type } = this.props.moving.attributes;
        const date = new Date(moving_time);
        return (
            <Fragment>
                <Modal centered size="tiny" open={this.state.modalOpen} onClose={this.handleClose}>
                    <Modal.Header>
                        <Header textAlign='center' as='h2'>
                            Leave a review
                        </Header>
                    </Modal.Header>
                    <Modal.Content>
                        <Modal.Actions>
                            <Header textAlign='center' as='h3' content={mover.company_name}/>
                            <Container textAlign='center' className='date'>
                                <Form>
                                    <TextArea value={this.state.review} onChange={this.handleChange} placeholder='Write your review' />
                                </Form>
                            </Container>
                            <Button positive fluid floated={'right'} onClick={this.handleRate}>
                                <Icon name='checkmark' /> Book
                            </Button>
                            <br/>
                            <br/>
                        </Modal.Actions>
                    </Modal.Content>
                </Modal>
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
                    <Grid.Column width={3}>
                        { status === 'completed' ?
                            <Fragment>
                                <Rating disabled={!!moving_rating} onRate={this.handleOpen} icon='star' size='large' defaultRating={parseInt(moving_rating) || this.state.rating} maxRating={5} />
                                {moving_review && <Header as='h5' content={`"${moving_review}"`} />}
                            </Fragment>
                            :
                            <Header as='h5' content='You can rate this when it completes'/>}
                    </Grid.Column>
                    <Grid.Column width={2}>
                        <Header as='h4' content={`$ ${final_price}`}/>
                    </Grid.Column>
                    <Grid.Column width={1}>
                        <Header as='h4' content={`${distance} (km)`}/>
                    </Grid.Column>
                    <Grid.Column width={2}>
                        <Header as='h4' content={mover.company_name}/>
                    </Grid.Column>
                </Grid.Row>
            </Fragment>
        );
    }
}

export default connect(null, {patchRating})(MovingRow);