import React, { Component } from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import {Redirect, Route, Switch} from "react-router-dom";
import Home from "./containers/Home";
import Footer from "./components/Footer";

class App extends Component {

    state = {
        user: {},
        message: ''
    }

    componentDidMount() {
        let token = localStorage.getItem("jwt");
        if (token) {
            //fetch user data.
        }
    }

    createUser = (e, userObj) => {
        const { name, email, password } = userObj
        fetch("http://localhost:3000/api/v1/users", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                Accepts: "application/json"
            },
            body: JSON.stringify({ name, email, password, country_code: this.state.countryCode })
        })
            .then(resp => resp.json())
            .then(this.setUserData)
    };

    setUserData = (data) => {
        if(data.message) {
            this.setState({message: data.message})
        } else {
            this.setState({user: data.user, message: ''});
            localStorage.setItem('jwt', data.jwt);
        }
    }

    loginUser = userObj => {
        const { email, password } = userObj
        fetch("http://localhost:3000/api/v1/login", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                Accepts: "application/json"
            },
            body: JSON.stringify({ user: { email, password } })
        })
            .then(resp => resp.json())
            .then(this.setUserData)
    };

    logout = () => {
        localStorage.removeItem('jwt')
        this.setState({user: {}})
    }

    render() {
        const { user, message } = this.state;
        const userExists = Object.keys(user).length > 0
        return (
            <div className="App">
                <NavBar
                    user={user}
                    message={message}
                    loginUser={this.loginUser}
                    logout={this.logout}
                    createUser={this.createUser}
                    setUserData={this.setUserData}
                />
                <br/>
                <Switch>
                    <Route exact path='/'  render={() => <Home />}/>
                    <Route exact path='/profile' render={() => (
                        userExists ? <Home user={user}/> : <Redirect to="/"/>
                    )
                    }/>
                </Switch>
                <br/>
                <Footer/>
            </div>
        );
    }
}

export default App;
