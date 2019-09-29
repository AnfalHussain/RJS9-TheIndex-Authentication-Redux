import { SET_CURRENT_USER } from "./actionTypes";
import axios from "axios"
import jwt_decode from "jwt-decode";

const setCurrentUser = user => ({
    type: SET_CURRENT_USER,
    payload: user
});

const setAuthToken = token => {
    return dispatch => {
        if (token) {
            axios.defaults.headers.common.Authorization = `JWT ${token}`;
            const decodedUser = jwt_decode(token);
            dispatch(setCurrentUser(decodedUser));
        } else {
            delete axios.defaults.headers.common.Authorization;
            dispatch(setCurrentUser())
        }
    }
};
export const login = userData => {
    return async dispatch => {
        try {
            let response = await axios.post("https://the-index-api.herokuapp.com/login/", userData);
            let user = await response.data;
            dispatch(setAuthToken(user.token));
        } catch (err) {
            console.log('An error occurred.', err);
        }
    };
};

export const signup = userData => {
    let user;

    return async dispatch => {
        try {
            let res = await axios.post("https://the-index-api.herokuapp.com/signup/", userData)
            user = await res.data;

        } catch (error) {
            console.error(error.response.data);
        }
        dispatch(setAuthToken(user.token))

    };
};
export const logout = () => {
    setAuthToken();
};