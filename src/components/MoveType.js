import React, {Component} from 'react';
import {Dropdown} from "semantic-ui-react";
import { connect } from 'react-redux'
import {setMoveTypeData} from "../actions/clientActions";
import {getMoveTypes} from "../actions/clientThunks";

class MoveType extends Component {

    state = {
        icon: 'dolly',
        loading: true
    }

    handleDropdown = (e, data) => {
        this.setState({icon: data.options[data.value - 1].icon})
        this.props.setMoveTypeData(data.value)
    };

    componentDidMount() {
        this.props.getMoveTypes().then(this.setState({loading: false}))
    }

    render() {
        return (
            <Dropdown
                loading={this.state.loading}
                onChange={this.handleDropdown}
                fluid
                className='icon'
                placeholder='Number of items to handle'
                labeled
                button
                icon={this.state.icon}
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