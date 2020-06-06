
import {

    FETCH_ALL_PROJECTS_SUCCESS,
    FETCH_ALL_PROJECTS_FAILURE,
    FETCH_ALL_PROJECTS_REQUEST

} from '../constant'

import {getProjects} from "../helper/api";

const requestHelper = (req, payload = null) => ({
    type: req,
    payload: payload
});

const responseHelper = (req, payload = null) => ({
    type: req,
    payload: payload
});

export const getAllProjects = (max) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(requestHelper(FETCH_ALL_PROJECTS_REQUEST));
            return getProjects(max).then((resp) => {
                dispatch(responseHelper(FETCH_ALL_PROJECTS_SUCCESS, resp));
            })
                .catch((err) => {
                    dispatch(responseHelper(FETCH_ALL_PROJECTS_FAILURE, err));
                })
        }, 3000)
    }
};