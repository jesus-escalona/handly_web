import React, { Component } from 'react';
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import { connect } from 'react-redux'

import './App.css';
import NavBar from "./components/NavBar";
import Home from "./containers/Home";
import Footer from "./components/Footer";
import Profile from "./containers/Profile";
import {getUserData} from "./actions/clientThunks";
import SearchPage from "./containers/SearchPage";
import MyMovingsContainer from "./containers/MyMovingsContainer";

class App extends Component {

    componentDidMount() {
        let token = localStorage.getItem("jwt");
        if(token) this.props.getUserData(token)
    }

    render() {
        const { userExists, selectedMoving } = this.props;
        return (
            <div className="App">
                <NavBar/>
                <Switch>
                    <Route exact path='/'  render={(routerProps) => (
                        <Home { ...routerProps }/>
                    )
                    }/>
                    <Route exact path='/profile' render={(routerProps) => (
                        userExists ? <Profile { ...routerProps }/> : <Redirect to="/"/>
                    )
                    }/>
                    <Route exact path='/search' render={(routerProps) => (
                        Object.keys(selectedMoving).length > 0 ? <SearchPage { ...routerProps }/> : <Redirect to="/"/>
                    )
                    }/>
                    <Route exact path='/mymovings' render={(routerProps) => (
                        userExists ? <MyMovingsContainer { ...routerProps }/> : <Redirect to="/"/>
                    )
                    }/>
                </Switch>
                <Footer/>
            </div>
        );
    }
}

const mapStateToProps = (state) => (
    {
        userExists: state.userExists,
        selectedMoving: state.selectedMoving
    }
);

export default withRouter(connect(mapStateToProps, {getUserData})(App));
