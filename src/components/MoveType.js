import React, {Component} from 'react';
import {moveOptions} from "../moveOptions";
import {Dropdown} from "semantic-ui-react";
import { connect } from 'react-redux'
import {setMoveTypeData} from "../actions/clientActions";

class MoveType extends Component {

    handleDropdown = (e, data) => {
        this.props.setMoveTypeData(data.value)
    };

    render() {
        return (
            <Dropdown
                onChange={this.handleDropdown}
                fluid
                className='icon'
                placeholder='Number of items to handle'
                labeled
                button
                icon='truck'
                selection
                value={this.props.moveType}
                options={moveOptions}
            />
        );
    }
}

const mapStateToProps = (state) => (
    {
        moveType: state.moveType
    }
);

export default connect(mapStateToProps, { setMoveTypeData })(MoveType);