import React from 'react';
import AlgoliaPlaces from 'algolia-places-react';

export default class SearchPlaces extends React.Component{

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

                onChange={({ query, rawAnswer, suggestion, suggestionIndex }) =>
                    console.log('Fired when suggestion selected in the dropdown or hint was validated.')}

                onSuggestions={({ rawAnswer, query, suggestions }) =>
                    console.log(suggestions)}

                onCursorChanged={({ rawAnswer, query, suggestion, suggestonIndex }) =>
                    console.log('Fired when arrows keys are used to navigate suggestions.')}

                onClear={() =>
                    console.log('Fired when the input is cleared.')}

                onLimit={({ message }) =>
                    console.log('Fired when you reached your current rate limit.')}

                onError={({ message }) =>
                    console.log('Fired when we could not make the request to Algolia Places servers for any reason but reaching your rate limit.')}
            />
        );
    }

}