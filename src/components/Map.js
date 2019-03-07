import React, {Component} from 'react';
import ReactMapGL, {Marker, Popup} from 'react-map-gl';
import {connect} from "react-redux";
import {Container, Header, Icon} from "semantic-ui-react";
import WebMercatorViewport from 'viewport-mercator-project';

class Map extends Component {

    state = {};

    componentDidMount() {
        this.setViewport()
    }

    componentDidUpdate(prevProps) {
        const { origin, destination } = prevProps;
        if (origin !== this.props.origin || destination !== this.props.destination) {
            this.setViewport()
        }
    }

    setViewport = () => {
        const { origin, destination } = this.props;

        const viewport = new WebMercatorViewport({width: 1000, height: 400})
            .fitBounds([[origin.latlng.lng, origin.latlng.lat], [destination.latlng.lng, destination.latlng.lat]], {
                padding: 20,
                offset: [0, -100]
            });

        this.setState({viewport: {...viewport, width: 'auto'}, origin, destination})
    };

    render() {
        const { origin, destination } = this.props;
        return (
            <Container fluid>
                <ReactMapGL
                    {...this.state.viewport}
                    mapStyle="mapbox://styles/mapbox/streets-v9"
                    mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API_KEY}
                    onViewportChange={(viewport) => this.setState({viewport})}
                >
                    <Marker key={1} latitude={origin.latlng.lat} longitude={origin.latlng.lng} offsetLeft={-12} offsetTop={-20}>
                        <Icon size='large' color='red' name='map pin' />
                    </Marker>
                    <Popup latitude={origin.latlng.lat} longitude={origin.latlng.lng} offsetTop={-20}>
                        <Header as='h5' content={origin.name}/>
                    </Popup>
                    <Marker key={2} latitude={destination.latlng.lat} longitude={destination.latlng.lng} offsetLeft={-12} offsetTop={-20}>
                        <Icon size='large' color='red' name='map pin' />
                    </Marker>
                    <Popup latitude={destination.latlng.lat} longitude={destination.latlng.lng} offsetTop={-20}>
                        <Header as='h5' content={destination.name}/>
                    </Popup>
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