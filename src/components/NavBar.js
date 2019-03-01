import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import {Link} from "react-router-dom";

import {Button, Container, Image, Menu, Header} from 'semantic-ui-react'
import Login from "./Login";
import SignUp from "./SignUp";
import {setUserData} from "../actions/clientActions";

class NavBar extends Component {

    logOut = () => {
        localStorage.removeItem('jwt');
        this.props.setUserData({})
    };

    render() {
        const { user } = this.props;
        const userExists = Object.keys(user).length > 0
        return (
            <Container fluid className='navbar'>
                    <Menu secondary>
                        {/*<Menu.Item as='a'>
                        <Image src={require('../assets/images/truck_inverted.png')} size='mini'/>
                    </Menu.Item>*/}
                        <Menu.Item>
                            <Header as='h2'>
                                <Link className='brand' to="/">Handly</Link>
                            </Header>
                        </Menu.Item>
                        {
                            userExists ?
                                <Fragment>
                                    <Menu.Item position='right'>
                                        <Image avatar circular size='mini' src={user.attributes.avatar}/>
                                        <Button
                                            floated='right'
                                            content={<Link className='loggedUserButton' to="/profile">{`Hello, ${user.attributes.name}`}</Link>}
                                            labelPosition='left'
                                        />
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
        user: state.user
    }
);

export default connect(mapStateToProps, {setUserData})(NavBar)