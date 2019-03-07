import React, {Component} from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';
import {connect} from "react-redux";
import {Container, Icon} from "semantic-ui-react";
import WebMercatorViewport from 'viewport-mercator-project';

class Map extends Component {

    state = {};

    componentDidMount() {
        const { origin, destination } = this.props;

        const viewport = new WebMercatorViewport({width: 1000, height: 400})
            .fitBounds([[origin.latlng.lng, origin.latlng.lat], [destination.latlng.lng, destination.latlng.lat]], {
                padding: 20,
                offset: [0, -100]
            });

        this.setState({viewport: {...viewport, width: 'auto'}})
    }

    render() {
        const { origin, destination } = this.props;
        return (
            <Container fluid>
                <ReactMapGL
                    {...this.state.viewport}
                    mapStyle="mapbox://styles/mapbox/streets-v9"
                    mapboxApiAccessToken='pk.eyJ1IjoiZXlpc3VzIiwiYSI6ImNqc3hxdnhmMjBwZ2czeW9mMGtmeWlsdjQifQ.f3DrOpGan3UTfiTFnR1KcA'
                    onViewportChange={(viewport) => this.setState({viewport})}
                >
                    <Marker key={1} latitude={origin.latlng.lat} longitude={origin.latlng.lng} offsetLeft={-12} offsetTop={-20}>
                        <Icon size='large' color='red' name='map pin' />
                    </Marker>
                    <Marker key={2} latitude={destination.latlng.lat} longitude={destination.latlng.lng} offsetLeft={-12} offsetTop={-20}>
                        <Icon size='large' color='red' name='map pin' />
                    </Marker>
                </ReactMapGL>
            </Container>
        );
    }
}
const mapStateToProps = (state) => (
    {
        origin: state.origin,
        destination: state.destination,
    }
);

export default connect(mapStateToProps)(Map)