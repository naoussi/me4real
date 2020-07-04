
import {
    NEW_FETCH_ALL_VIDEOS_REQUEST,
    NEW_FETCH_ALL_VIDEOS_SUCCESS,
    NEW_FETCH_ALL_VIDEOS_FAILURE
} from "../constant";

import {get_video} from "../helper/api";

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