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
} from '../constant'

export default function video(state = {}, action) {
    switch (action.type) {
        //FETCHING
        case FETCH_ALL_VIDEO_REQUEST:
            return {
                ...state,
                isFetching: true,
            }
        case FETCH_ALL_VIDEO_SUCCESS:
            return {
                ...state,
                isFetching: false,
                video: action.payload.result,
            }
        case FETCH_ALL_VIDEO_FAILURE:
            return {
                ...state,
                isFetching: false,
                fail: action.payload.result,
            }

        // Adding NEW EVENT
        case ADD_VIDEO_REQUEST:
            return {
                ...state,
                isSaving: true,

            }

        case ADD_VIDEO_SUCCESS:
            return {
                ...state,
                isSaving: false,
                video: [...state.VIDEO, action.payload.result]
            }
        case ADD_VIDEO_FAILURE:
            return {
                ...state,
                isSaving: false,
                fail: action.payload.result,
            }

        // Deleting the event

        case DELETE_VIDEO_REQUEST:
            return {
                isDeleting: true,
                ...state,

            }
        case DELETE_VIDEO_SUCCESS:
            return {
                isDeleting: false,
                ...state,
            }

        case DELETE_VIDEO_FAILURE:
            return {
                isDeleting: false,
                ...state,
                fail: action.payload.result,
            }

        default:
            return state
    }
}