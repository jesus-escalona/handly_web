import React, {Component} from 'react';
import {Header} from "semantic-ui-react";
import {withRouter} from "react-router-dom";

class Profile extends Component {
    render() {
        return (
            <div>
                <Header>Go home</Header>
            </div>
        );
    }
}

export default withRouter(Profile);