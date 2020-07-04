
import {
    NEW_FETCH_ALL_VIDEOS_REQUEST,
    NEW_FETCH_ALL_VIDEOS_SUCCESS,
    NEW_FETCH_ALL_VIDEOS_FAILURE,

    NEW_ADD_VIDEO_REQUEST,
    NEW_ADD_VIDEO_SUCCESS,
    NEW_ADD_VIDEO_FAILURE,

    NEW_DELETE_VIDEO_REQUEST,
    NEW_DELETE_VIDEO_SUCCESS,
    NEW_DELETE_VIDEO_FAILURE
} from "../constant";

const initialState = {
    allVideos: {
        isFetching: false,
        data: null,
        error: null
    },
    addVideos: {
        isAdding: false,
        data: null,
        error: null
    },
    deleteVideo: {
        isDeleting: false,
        deleted: false,
        error: null
    }
};

export const newVideosUI = (state = initialState, action) => {
    switch (action.type) {
        case NEW_FETCH_ALL_VIDEOS_REQUEST:
            return {
                ...state,
                allVideos: {
                    isFetching: true,
                    data: null,
                    error: null
                }
            };

        case NEW_FETCH_ALL_VIDEOS_SUCCESS:
            return {
                ...state,
                allVideos: {
                    isFetching: false,
                    data: action.payload.result,
                    error: null
                }
            };

        case NEW_FETCH_ALL_VIDEOS_FAILURE:
            return {
                ...state,
                allVideos: {
                    isFetching: false,
                    data: null,
                    error: action.payload
                }
            };

        case NEW_ADD_VIDEO_REQUEST:
            return {
                ...state,
                addVideos: {
                    isAdding: true,
                    data: null,
                    error: null
                }
            };

        case NEW_ADD_VIDEO_SUCCESS:
            return {
                ...state,
                addVideos: {
                    isAdding: false,
                    data: action.payload,
                    error: null
                }
            };

        case NEW_ADD_VIDEO_FAILURE:
            return {
                ...state,
                addVideos: {
                    isAdding: false,
                    data: null,
                    error: action.payload
                }
            };

        case NEW_DELETE_VIDEO_REQUEST:
            return {
                ...state,
                deleteVideo: {
                    isDeleting: true,
                    deleted: false,
                    error: null
                }
            };

        case NEW_DELETE_VIDEO_SUCCESS:
            return {
                ...state,
                deleteVideo: {
                    isDeleting: false,
                    deleted: true,
                    error: null
                }
            };

        case NEW_DELETE_VIDEO_FAILURE:
            return {
                ...state,
                deleteVideo: {
                    isDeleting: false,
                    deleted: false,
                    error: action.payload
                }
            };

        default:
            return state;
    }
};