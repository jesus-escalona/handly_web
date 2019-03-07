import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import {Link, withRouter} from "react-router-dom";

import {Button, Container, Image, Menu, Header, Dropdown} from 'semantic-ui-react'
import Login from "./Login";
import SignUp from "./SignUp";
import {setUserData} from "../actions/clientActions";

class NavBar extends Component {

    logOut = () => {
        localStorage.removeItem('jwt');
        this.props.setUserData({})
    };

    render() {
        const { user, userExists } = this.props;
        return (
            <Container fluid className='navbar'>
                    <Menu secondary>
                        {/*<Menu.Item as='a'>
                        <Image src={require('../assets/images/truck_inverted.png')} size='mini'/>
                    </Menu.Item>*/}
                        <Menu.Item>
                            <Header as='h2'>
                                <Link className='brand' to="/">Handly</Link>
                                <Link className='brand' to="/search">search</Link>
                            </Header>
                        </Menu.Item>
                        {
                            userExists ?
                                <Fragment>
                                    <Menu.Item position='right'>
                                        <Image avatar circular size='mini' src={user.attributes.avatar}/>
                                        <Dropdown className='estimate' text={`Hello, ${user.attributes.name}`} floating button>
                                            <Dropdown.Menu>
                                                <Dropdown.Item onClick={() => this.props.history.push('/profile')} text='Profile'/>
                                                <Dropdown.Item onClick={() => this.props.history.push('/mymovings')} text='Movings'/>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <Button icon='sign-out' floated='right' label='Logout' labelPosition='left' onClick={this.logOut} />
                                    </Menu.Item>
                                </Fragment>
                                :
                                <Fragment>
                                    <Menu.Item position='right'>
                                        <Login submitHandler={this.props.loginUser}/>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <SignUp submitHandler={this.props.createUser} />
                                    </Menu.Item>
                                </Fragment>
                        }
                    </Menu>
            </Container>
        )
    }
}

const mapStateToProps = (state) => (
    {
        user: state.user,
        userExists: state.userExists
    }
);

export default withRouter(connect(mapStateToProps, {setUserData})(NavBar))