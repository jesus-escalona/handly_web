import React, {Component} from 'react';
import {Dropdown} from "semantic-ui-react";
import { connect } from 'react-redux'
import {setMoveTypeData} from "../actions/clientActions";
import {getMoveTypes} from "../actions/clientThunks";

class MoveType extends Component {

    handleDropdown = (e, data) => {
        this.props.setMoveTypeData(data.value)
    };

    componentDidMount() {
        this.props.getMoveTypes()

    }

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
                options={this.props.moveTypes}
            />
        );
    }
}

const mapStateToProps = (state) => (
    {
        moveType: state.moveType,
        moveTypes: state.moveTypes
    }
);

export default connect(mapStateToProps, { setMoveTypeData, getMoveTypes })(MoveType);