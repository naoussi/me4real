
import {

    FETCH_ALL_PROJECTS_SUCCESS,
    FETCH_ALL_PROJECTS_FAILURE,
    FETCH_ALL_PROJECTS_REQUEST,
    POST_PROJECT_REQUEST,
    POST_PROJECT_SUCCESS,
    POST_PROJECT_FAILURE

} from '../constant';

import {getProjects, postProject} from "../helper/api";

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
        dispatch(requestHelper(FETCH_ALL_PROJECTS_REQUEST));
        return getProjects(max).then((resp) => {
            dispatch(responseHelper(FETCH_ALL_PROJECTS_SUCCESS, resp));
        })
            .catch((err) => {
                dispatch(responseHelper(FETCH_ALL_PROJECTS_FAILURE, err));
            })
    }
};

export const addProject = (title, description, image, rank) => {
    return (dispatch) => {
        dispatch(requestHelper(POST_PROJECT_REQUEST));
        return postProject(title, description, image, rank).then((resp) => {

            console.log("results post:", resp);
            if (resp.result.failed_msg) {
                dispatch(requestHelper(POST_PROJECT_FAILURE, resp));
            } else {
                dispatch(requestHelper(POST_PROJECT_SUCCESS, resp));
            }
        })
            .catch((err) => {
                dispatch(requestHelper(POST_PROJECT_FAILURE, err));
            });
    }
};