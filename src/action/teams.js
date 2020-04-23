import {
    FETCH_ALL_TEAM_REQUEST,
    FETCH_ALL_TEAM_SUCCESS,
    FETCH_ALL_TEAM_FAILURE,

    ADD_TEAM_REQUEST,
    ADD_TEAM_SUCCESS,
    ADD_TEAM_FAILURE,

    DELETE_TEAM_REQUEST,
    DELETE_TEAM_SUCCESS,
    DELETE_TEAM_FAILURE,
    MAX_FETCH_RESULT,

} from '../constant';
import { get_team, add_team, delete_team } from '../helper/api'


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

//fetching of all TEAM here
export function handleFetchTeam(max) {
    return (dispatch) => {
        dispatch(requestHelper(FETCH_ALL_TEAM_REQUEST))
        return get_team(max).then((resp) => {
            dispatch(responseHelper(FETCH_ALL_TEAM_SUCCESS, resp))
        })
            .catch((err) => dispatch(responseHelper(FETCH_ALL_TEAM_FAILURE, err)))
    }
}
//Adding of a single event here
export function handleAddTeam(event, editing) {
    return (dispatch) => {
        dispatch(requestHelper(ADD_TEAM_REQUEST))
        return add_team(event, editing).then((resp) => {
            dispatch(responseHelper(ADD_TEAM_SUCCESS, resp))
            //fetch new content after adding
            dispatch(handleFetchTeam(MAX_FETCH_RESULT))
        })
            .catch((err) => dispatch(responseHelper(ADD_TEAM_FAILURE, err)))
    }
}
//deleting of a single event here
export function handleDeleteTeam(team_id) {
    return (dispatch) => {
        dispatch(requestHelper(DELETE_TEAM_REQUEST))
        return delete_team(team_id).then((resp) => {
            dispatch(responseHelper(DELETE_TEAM_SUCCESS, resp))
            // fetch the new content after delete
            // dispatch(handleFetchTeam(handleDeleteTeam))
            dispatch(handleFetchTeam(MAX_FETCH_RESULT))

        })
            .catch((err) => dispatch(responseHelper(DELETE_TEAM_FAILURE, err)))
    }
}