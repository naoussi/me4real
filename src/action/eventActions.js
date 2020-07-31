import {
    NEW_ADD_EVENT_REQUEST,
    NEW_ADD_EVENT_SUCCESS,
    NEW_ADD_EVENT_FAILURE,
    NEW_FETCH_EVENTS_REQUEST,
    NEW_FETCH_EVENTS_SUCCESS,
    NEW_FETCH_EVENTS_FAILURE, NEW_DELETE_EVENT_REQUEST, NEW_DELETE_EVENT_SUCCESS, NEW_DELETE_EVENT_FAILURE
} from "../constant";

import {apiAddEvent, apiGetEvents, delete_event, get_events} from "../helper/api";

//payload is the response or data to be set to store
function requestHelper(req, payload = null) {
    return {
        type: req,
        payload: payload,
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

export const funcAddEvent = (title, time, description, location, latitude, longitude, rank) => {
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

export const getEvents = (max) => {
    return (dispatch) => {
        dispatch(requestHelper(NEW_FETCH_EVENTS_REQUEST));
        return apiGetEvents(max)
            .then((resp) => {
                console.log("EVENTS_SUCCESS:", resp);
                dispatch(responseHelper(NEW_FETCH_EVENTS_SUCCESS, resp));
            })
            .catch((error) => {
                console.log("EVENTS_FAILURE:", error);
                dispatch(responseHelper(NEW_FETCH_EVENTS_FAILURE, error));
            });
    }
};

export const funcDeleteEvent = (id) => {
    return (dispatch) => {
        dispatch(requestHelper(NEW_DELETE_EVENT_REQUEST));
        return delete_event(id)
            .then((resp) => {
                dispatch(responseHelper(NEW_DELETE_EVENT_SUCCESS, resp));
            })
            .catch((error) => {
                dispatch(responseHelper(NEW_DELETE_EVENT_FAILURE, error));
            });
    }
};