import {setUserData, setCompaniesData, setMessages, setEstimateData, setMoveTypes, setMovingsData} from './clientActions'
import { getData } from "../helpers/Adapter";

export const getUserData = (token) => {
    return dispatch => getData.get('profile', token).then((data) => handleResponse(data, dispatch))
};

export const loginUser = ({email, password}) => {
    const userObj = { user: { email, password } };
    return dispatch => getData.post('login', null , userObj).then((data) => handleResponse(data, dispatch))
};

export const signUpUser = (userObj) => {
    return dispatch => getData.post('clients', null, userObj).then((data) => handleResponse(data, dispatch))
};

export const patchUser = (userObj,token) => {
    return dispatch => getData.patch('clients/edit', token, userObj).then((data) => handleResponse(data, dispatch))
};

export const getEstimate = (moveObj) => {
    return dispatch => getData.post('estimate', null, moveObj).then(data => {
        if (data.hasOwnProperty('error')) {
            return data
        } else {
            dispatch(setCompaniesData(data.companies.data));
            dispatch(setEstimateData(data.moving_estimate.data))
        }
    })
};

export const getMoveTypes = () => {
    return dispatch => getData.get('move_types').then(data => dispatch(setMoveTypes(data.move_types.data)))
};

export const patchRating = (obj, token, id) => {
    return dispatch => getData.patch(`movings/${id}`, token, obj).then((data) => handleResponse(data, dispatch))
};

export const createMoving = (movingObj, token) => {
    return dispatch => getData.post('movings', token, movingObj).then(data => {
        if (data.hasOwnProperty('error')) {
            return data
        } else {
            dispatch(getUserData(token))
        }
    })
};

const handleResponse = (data, dispatch) => {
    if(data.messages) {
        dispatch(setMessages(data.messages))
    } else {
        if (data.jwt) localStorage.setItem('jwt', data.jwt);
        dispatch(setUserData(data.client.data));
        dispatch(setMovingsData(data.movings.data));
    }
};
