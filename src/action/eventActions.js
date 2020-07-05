import {
    NEW_ADD_EVENT_REQUEST,
    NEW_ADD_EVENT_SUCCESS,
    NEW_ADD_EVENT_FAILURE
} from "../constant";

import {apiAddEvent} from "../helper/api";

//payload is the response or data to be set to store
function requestHelper(req, payload = null) {
    return {
        type: req,
        payload,
    }
}

// req is going to be the constant
//payload is the response or data to be set to store
function responseHelper(req, payload) {
    return {
        type: req,
        payload: payload,
    }
}

export const addEvent = (title, time, description, location, latitude, longitude, rank) => {
    const body = {title, time, description, location, latitude, longitude, rank};
    return (dispatch) => {
        dispatch(requestHelper(NEW_ADD_EVENT_REQUEST));
        return apiAddEvent(body)
            .then((resp) => {
                dispatch(responseHelper(NEW_ADD_EVENT_SUCCESS, resp));
            })
            .catch((error) => {
                dispatch(responseHelper(NEW_ADD_EVENT_FAILURE, error))
            })
    }
};