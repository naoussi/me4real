import {
    NEW_ADD_VIDEO_FAILURE,
    NEW_ADD_VIDEO_REQUEST,
    NEW_ADD_VIDEO_SUCCESS,
    NEW_FETCH_ALL_VIDEOS_FAILURE,
    NEW_FETCH_ALL_VIDEOS_REQUEST,
    NEW_FETCH_ALL_VIDEOS_SUCCESS
} from "../constant";

import {add_video, get_video} from "../helper/api";

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

export const fetchAllVideos = (max) => {
    return (dispatch) => {
        dispatch(requestHelper(NEW_FETCH_ALL_VIDEOS_REQUEST));
        return get_video(max).then((resp) => {
            dispatch(responseHelper(NEW_FETCH_ALL_VIDEOS_SUCCESS, resp));
        })
            .catch((error) => {
                dispatch(responseHelper(NEW_FETCH_ALL_VIDEOS_FAILURE, error));
            })
    }
};

export const addVideo = (title, link, rank) => {
    const body = {title, link, rank};
    return (dispatch) => {
        dispatch(requestHelper(NEW_ADD_VIDEO_REQUEST));
        return add_video(body, false)
            .then((resp) => {
                dispatch(responseHelper(NEW_ADD_VIDEO_SUCCESS, resp));
            })
            .catch((error) => {
                dispatch(responseHelper(NEW_ADD_VIDEO_FAILURE, error));
            })
    }
};