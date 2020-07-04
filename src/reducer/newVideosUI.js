
import {
    NEW_FETCH_ALL_VIDEOS_REQUEST,
    NEW_FETCH_ALL_VIDEOS_SUCCESS,
    NEW_FETCH_ALL_VIDEOS_FAILURE
} from "../constant";

const initialState = {
    allVideos: {
        isFetching: false,
        data: null,
        error: null
    }
};

export const newVideosUI = (state = initialState, action) => {
    switch (action.type) {
        case NEW_FETCH_ALL_VIDEOS_REQUEST:
            return {
                ...state,
                videos: {
                    isFetching: true,
                    data: null,
                    error: null
                }
            };

        case NEW_FETCH_ALL_VIDEOS_SUCCESS:
            return {
                ...state,
                videos: {
                    isFetching: false,
                    data: action.payload.result,
                    error: null
                }
            };

        case NEW_FETCH_ALL_VIDEOS_FAILURE:
            return {
                ...state,
                videos: {
                    isFetching: false,
                    data: null,
                    error: action.payload
                }
            };

        default:
            return state;
    }
};