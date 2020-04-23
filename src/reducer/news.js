import { 
    FETCH_ALL_NEWS_REQUEST,
    FETCH_ALL_NEWS_SUCCESS,
    FETCH_ALL_NEWS_FAILURE,

    ADD_NEWS_REQUEST,
    ADD_NEWS_SUCCESS,
    ADD_NEWS_FAILURE,

    DELETE_NEWS_REQUEST,
    DELETE_NEWS_SUCCESS,
    DELETE_NEWS_FAILURE,
 } from '../constant'

export default function news(state = {}, action) {
    switch (action.type) {
        //FETCHING
        case FETCH_ALL_NEWS_REQUEST:
            return {
                ...state,
                isFetching: true,
            }
        case FETCH_ALL_NEWS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                news: action.payload.result,
            }
        case FETCH_ALL_NEWS_FAILURE:
            return {
                ...state,
                isFetching: false,
                fail: action.payload.result,
            }

        // Adding NEW EVENT
        case ADD_NEWS_REQUEST:
            return {
                ...state,
                isSaving: true,
                saved: false

            }

        case ADD_NEWS_SUCCESS:
            return {
                ...state,
                isSaving: false,
                saved: true,
                news: [...state.news, action.payload.result]
            }
        case ADD_NEWS_FAILURE:
            return {
                ...state,
                isSaving: false,
                saved: false,
                fail: action.payload.result,
            }

        // Deleting the event

        case DELETE_NEWS_REQUEST:
            return {
                isDeleting: true,
                ...state,

            }
        case DELETE_NEWS_SUCCESS:
            return {
                isDeleting: false,
                ...state,
            }

        case DELETE_NEWS_FAILURE:
            return {
                isDeleting: false,
                ...state,
                fail: action.payload.result,
            }

        default:
            return state
    }
}