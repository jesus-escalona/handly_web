import React, { Component } from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import { connect } from 'react-redux'

import './App.css';
import NavBar from "./components/NavBar";
import Home from "./containers/Home";
import Footer from "./components/Footer";
import Profile from "./containers/Profile";
import {getUserData} from "./actions/clientThunks";

class App extends Component {

    state = {
        reviews: []
    };

    componentDidMount() {
        this.getReviews();
        //this.props.getCompaniesData();
        let token = localStorage.getItem("jwt");
        if(token) this.props.getUserData(token)
    }

    getReviews = () => {
        return fetch("http://localhost:3000/api/v1/reviews")
            .then(resp => resp.json())
            .then(data => this.setState({reviews: data.reviews.data}));
    }

    render() {
        const { reviews } = this.state;
        const userExists = Object.keys(this.props.user).length > 0
        return (
            <div className="App">
                <NavBar/>
                <br/>
                <Switch>
                    <Route exact path='/'  render={() => (
                        <Home {...this.state}/>
                    )
                    }/>
                    <Route exact path='/profile' render={() => (
                        userExists ? <Profile {...this.state} /> : <Redirect to="/"/>
                    )
                    }/>
                </Switch>
                <br/>
                <Footer/>
            </div>
        );
    }
}

const mapStateToProps = (state) => (
    {
        user: state.user,
        movers: state.movers
    }
);

export default connect(mapStateToProps, {getUserData})(App);
