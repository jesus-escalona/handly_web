import React, {Component} from 'react';
import {Header, Image, Rating, Segment} from "semantic-ui-react";
import {CarouselProvider, Slide, Slider} from "pure-react-carousel";

class ReviewsContainer extends Component {

    state = {
        reviews: []
    };

    componentDidMount() {
        this.getReviews();
    }

    getReviews = () => {
        return fetch(`${process.env.REACT_APP_BACKEND_URL}/api/v1/reviews`)
            .then(resp => resp.json())
            .then(data => this.setState({reviews: data.reviews.data}));
    };


    render() {
        const { reviews } = this.state;
        return (
            <div>
                <Header as='h1' inverted>Check what people are saying</Header>
                {reviews.length &&
                (<Segment basic>
                    <CarouselProvider
                        naturalSlideWidth={100}
                        naturalSlideHeight={100}
                        totalSlides={reviews.length}
                    >
                        <Slider style={{height: '20rem'}}>
                            {reviews.map((review, i) => (
                                    <Slide key={review.id} index={i} style={{height: '20rem'}}>
                                        <Image centered circular size='small' src={review.attributes.avatar} />
                                        <br/>
                                        <div>
                                            <Header as='h4' inverted>{`"${review.attributes.moving_review}"`}</Header>
                                            <Header as='h3' inverted>{review.attributes.client}</Header>
                                            <Rating icon='star' size='huge' defaultRating={review.attributes.moving_rating} maxRating={5} />
                                        </div>
                                    </Slide>
                                )
                            )}
                        </Slider>
                    </CarouselProvider>
                </Segment>)}
                <br/>
            </div>
        );
    }
}

export default ReviewsContainer;