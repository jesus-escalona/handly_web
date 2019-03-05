import {Message, Button, Form, Modal, Icon, Label, Header, Container, Dimmer} from "semantic-ui-react";
import React, {Component, Fragment} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {createMoving} from "../actions/clientThunks";

class BookNow extends Component {

    state = {
        startDate: new Date(),
        modalOpen: false,
        loading: false,
        error: ''
    };

    handleChange = (date) => {
        this.setState({
            startDate: date
        });
    }

    handleOpen = () => {
        this.props.userExists ?
            this.setState({ modalOpen: true }) :
            console.log('not logged in')
    };

    handleClose = () => this.setState({ modalOpen: false });

    handleCreate = () => {
        let token = localStorage.getItem("jwt");
        if(token) {
            this.setState({ loading: true });
            const { selectedMoving, createMoving, mover } = this.props;
            const { startDate } = this.state;

            const obj = {
                moving: {
                    ...selectedMoving.attributes,
                    mover_id: mover.id,
                    moving_time: startDate
                }
            };

            createMoving(obj, token).then(data => {
                if(data) {
                    this.setState({error: data.error})
                } else {
                    this.props.history.push('/mymovings')
                }
            })

        }

    };

    handleHide = () => this.setState({ loading: false, error: '' });


    render() {
        const { userExists, mover } = this.props;
        const { loading, error } = this.state;

        return (
            <Fragment>
                <Dimmer page active={loading} onClickOutside={this.handleHide}>
                    <Header inverted as={'h1'}>{error || 'Getting you the best prices...'}</Header>
                    <div className="spinner">
                        <div className="cube1"/>
                        <div className="cube2"/>
                    </div>
                </Dimmer>
                <Dimmer.Dimmable dimmed={loading}>
                    <Modal centered size="tiny" open={this.state.modalOpen} trigger={<Button disabled={!userExists} onClick={this.handleOpen} className='estimate'>Book Now</Button>} onClose={this.handleClose}>
                        <Modal.Header>
                            <Header textAlign='center' as='h2'>
                                Select a time slot
                            </Header>
                        </Modal.Header>
                        <Modal.Content>
                            <Modal.Actions>
                                <Header textAlign='center' as='h3' content={mover.attributes.company_name}/>
                                <Container textAlign='center' className='date'>
                                    <DatePicker
                                        minDate={new Date()}
                                        showTimeSelect
                                        selected={this.state.startDate}
                                        onChange={this.handleChange}
                                        dateFormat="Pp"
                                    />
                                </Container>
                                <Button positive fluid floated={'right'} onClick={this.handleCreate}>
                                    <Icon name='checkmark' /> Book
                                </Button>
                                <br/>
                                <br/>
                            </Modal.Actions>
                        </Modal.Content>
                    </Modal>
                </Dimmer.Dimmable>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => (
    {
        userExists: state.userExists,
        selectedMoving: state.selectedMoving

    }
);

export default withRouter(connect(mapStateToProps, {createMoving})(BookNow))
