import React from 'react';
import AlgoliaPlaces from 'algolia-places-react';
import { connect } from "react-redux";
import {setLocationData} from "../actions/clientActions";

class SearchPlaces extends React.Component{

    selectHandler = ({ query, rawAnswer, suggestion, suggestionIndex }) => {
        this.props.setLocationData(suggestion, this.props.type)
    };

    render() {
        return (
            <AlgoliaPlaces
                placeholder={this.props.text}
                options={{
                    appId: 'plLGGCCSPNM2',
                    apiKey: [process.env.REACT_APP_ALGOLIA_PLACES_API_KEY],
                    language: 'en',
                    countries: ['us'],
                    type: 'address',
                    // Other options from https://community.algolia.com/places/documentation.html#options
                }}

                onChange={this.selectHandler}

                // onSuggestions={({ rawAnswer, query, suggestions }) =>
                //     console.log(suggestions)}
                //
                // onCursorChanged={({ rawAnswer, query, suggestion, suggestonIndex }) =>
                //     console.log('Fired when arrows keys are used to navigate suggestions.')}
                //
                // onClear={() =>
                //     console.log('Fired when the input is cleared.')}

                onLimit={console.log}

                onError={console.log}
            />
        );
    }

}

export default connect(null, { setLocationData })(SearchPlaces)