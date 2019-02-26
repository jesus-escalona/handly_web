import { setUserData, setCompaniesData, setMessages } from './clientActions'

export const getUserData = (token) => {
    return (dispatch) => (
        fetch("http://localhost:3000/api/v1/profile", {
            headers: {
                "content-type": "application/json",
                'Accepts': "application/json",
                'Authorization': `Bearer ${token}`
            }
        })
            .then(resp => resp.json())
            .then(data => dispatch(setUserData(data.client.data)))
    )
};

export const getCompaniesData = () => {
    return (dispatch) => (
        fetch("http://localhost:3000/api/v1/movers")
            .then(resp => resp.json())
            .then(data => dispatch(setCompaniesData(data.companies.data)))
    );
};

export const loginUser = ({email, password}) => {
    return (dispatch) => (
        fetch("http://localhost:3000/api/v1/login", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                Accepts: "application/json"
            },
            body: JSON.stringify({ user: { email, password } })
        })
            .then(resp => resp.json())
            .then((data) => handleResponse(data, dispatch)))
};

export const signUpUser = (userObj) => {
    return (dispatch) => (
        fetch("http://localhost:3000/api/v1/clients", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                Accepts: "application/json"
            },
            body: JSON.stringify(userObj)
        })
            .then(resp => resp.json())
            .then((data) => handleResponse(data, dispatch)))
};

const handleResponse = (data, dispatch) => {
    if(data.messages) {
        dispatch(setMessages(data.messages))
    } else {
        localStorage.setItem('jwt', data.jwt);
        dispatch(setUserData(data.client.data))
    }
}