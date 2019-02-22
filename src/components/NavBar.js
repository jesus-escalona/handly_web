import React, { Component, Fragment } from 'react'
import {Button, Container, Image, Menu, Label, Header, Grid} from 'semantic-ui-react'
import Login from "./Login";
import Signup from "./SignUp";
import {NavLink} from "react-router-dom";

export default class NavBar extends Component {
    state = { activeItem: 'home' };

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
        const { activeItem } = this.state;
        const userExists = false
        return (
            <Container fluid className='navbar'>
                <Menu secondary>
                    {/*<Menu.Item as='a'>
                        <Image src={require('../assets/images/truck_inverted.png')} size='mini'/>
                    </Menu.Item>*/}
                    <Menu.Item>
                        <Header as='h2'>
                            <NavLink style={{fontSize: 40,color: '#5A4FF3', fontWeight: 800}} to="/">Handly</NavLink>
                        </Header>
                    </Menu.Item>
                    {
                        userExists ?
                            <Menu.Item position='right'>
                                <Label
                                    color='black'
                                    size='big'
                                    content={<NavLink to="/profile">{`Welcome back, ${this.props.user.data.attributes.name}`}</NavLink>}
                                    image={{avatar: true, spaced: 'right', src: require('../assets/images/avatar.png')}}
                                />
                                <Button icon='sign-out' floated='right' label='Logout' labelPosition='left' onClick={this.props.logout} />
                            </Menu.Item>
                            :
                            <Fragment>
                                <Menu.Item position='right'>
                                    <Login message={this.props.message} submitHandler={this.props.loginUser}/>
                                </Menu.Item>
                                <Menu.Item>
                                    <Signup message={this.props.message} submitHandler={this.props.createUser} />
                                </Menu.Item>
                            </Fragment>
                    }
                </Menu>
            </Container>
        )
    }
}