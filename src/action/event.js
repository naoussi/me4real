import {
    FETCH_ALL_EVENTS_REQUEST,
    FETCH_ALL_EVENTS_SUCCESS,
    FETCH_ALL_EVENTS_FAILURE,

    ADD_EVENTS_REQUEST,
    ADD_EVENTS_SUCCESS,
    ADD_EVENTS_FAILURE,

    DELETE_EVENTS_REQUEST,
    DELETE_EVENTS_SUCCESS,
    DELETE_EVENTS_FAILURE,
    MAX_FETCH_RESULT

} from '../constant';
import { get_events,   add_event, delete_event } from '../helper/api'
import { dispatch } from 'rxjs/internal/observable/pairs';


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

//fetching of all events here
export function handleFetchEvents(max) {
    return (dispatch) => {
        dispatch(requestHelper(FETCH_ALL_EVENTS_REQUEST))
        return get_events(max).then((resp) => {
            dispatch(responseHelper(FETCH_ALL_EVENTS_SUCCESS, resp))
        })
            .catch((err) => dispatch(responseHelper(FETCH_ALL_EVENTS_FAILURE, err)))
    }
}
//Adding of a single event here
export function handleAddEvent(event, editing) {
    return (dispatch) => {
        dispatch(requestHelper(ADD_EVENTS_REQUEST))
        return add_event(event, editing).then((resp) => {
            dispatch(responseHelper(ADD_EVENTS_SUCCESS, resp))
            dispatch(handleFetchEvents(MAX_FETCH_RESULT))
        })
            .catch((err) => dispatch(responseHelper(ADD_EVENTS_FAILURE, err)))
    }
}
//deleting of a single event here
export function handleDeleteEvent(event_id) {
    return (dispatch) => {
        dispatch(requestHelper(DELETE_EVENTS_REQUEST))
        return delete_event(event_id).then((resp) => {
            dispatch(responseHelper(DELETE_EVENTS_SUCCESS, resp))
            dispatch(handleFetchEvents(MAX_FETCH_RESULT))
        })
            .catch((err) => dispatch(responseHelper(DELETE_EVENTS_FAILURE, err)))
    }
}