import {
    FETCH_ALL_VIDEO_REQUEST,
    FETCH_ALL_VIDEO_SUCCESS,
    FETCH_ALL_VIDEO_FAILURE,

    ADD_VIDEO_REQUEST,
    ADD_VIDEO_SUCCESS,
    ADD_VIDEO_FAILURE,

    DELETE_VIDEO_REQUEST,
    DELETE_VIDEO_SUCCESS,
    DELETE_VIDEO_FAILURE,
    MAX_FETCH_RESULT,

} from '../constant';
import { get_video, add_video, delete_video } from '../helper/api'


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

//fetching of all VIDEO here
export function handleFetchVideo(max) {
    return (dispatch) => {
        dispatch(requestHelper(FETCH_ALL_VIDEO_REQUEST))
        return get_video(max).then((resp) => {
            dispatch(responseHelper(FETCH_ALL_VIDEO_SUCCESS, resp))
        })
            .catch((err) => dispatch(responseHelper(FETCH_ALL_VIDEO_FAILURE, err)))
    }
}
//Adding of a single event here
export function handleAddVideo(event, editing) {
    return (dispatch) => {
        dispatch(requestHelper(ADD_VIDEO_REQUEST))
        return add_video(event, editing).then((resp) => {
            dispatch(responseHelper(ADD_VIDEO_SUCCESS, resp))
            //fetch new content after adding
            dispatch(handleFetchVideo(MAX_FETCH_RESULT))
        })
            .catch((err) => dispatch(responseHelper(ADD_VIDEO_FAILURE, err)))
    }
}
//deleting of a single event here
export function handleDeleteVideo(video_id) {
    return (dispatch) => {
        dispatch(requestHelper(DELETE_VIDEO_REQUEST))
        return delete_video(video_id).then((resp) => {
            dispatch(responseHelper(DELETE_VIDEO_SUCCESS, resp))
            // fetch the new content after delete
            // dispatch(handleFetchVIDEO(handleDeleteVIDEO))
            dispatch(handleFetchVideo(MAX_FETCH_RESULT))

        })
            .catch((err) => dispatch(responseHelper(DELETE_VIDEO_FAILURE, err)))
    }
}