
    import {
    FETCH_ALL_BLOG_REQUEST,
    FETCH_ALL_BLOG_SUCCESS,
    FETCH_ALL_BLOG_FAILURE,

    ADD_BLOG_REQUEST,
    ADD_BLOG_SUCCESS,
    ADD_BLOG_FAILURE,

    DELETE_BLOG_REQUEST,
    DELETE_BLOG_SUCCESS,
    DELETE_BLOG_FAILURE,

} from '../constant'

export default function blog(state = {}, action) {
    switch (action.type) {
        //FETCHING
        case FETCH_ALL_BLOG_REQUEST:
            return {
                ...state,
                isFetching: true,
            }
        case FETCH_ALL_BLOG_SUCCESS:
            return {
                ...state,
                isFetching: false,
                blogs: action.payload.result,
            }
        case FETCH_ALL_BLOG_FAILURE:
            return {
                ...state,
                isFetching: false,
                fail: action.payload.result,
            }

        // Adding NEW EVENT
        case ADD_BLOG_REQUEST:
            return {
                ...state,
                isSaving: true,

            }

        case ADD_BLOG_SUCCESS:
            return {
                ...state,
                isSaving: false,
                blogs: [...state.blogs, action.payload.result]
            }
        case ADD_BLOG_FAILURE:
            return {
                ...state,
                isSaving: false,
                fail: action.payload.result,
            }

        // Deleting the event

        case DELETE_BLOG_REQUEST:
            return {
                isDeleting: true,
                ...state,

            }
        case DELETE_BLOG_SUCCESS:
            return {
                isDeleting: false,
                ...state,
            }

        case DELETE_BLOG_FAILURE:
            return {
                isDeleting: false,
                ...state,
                fail: action.payload.result,
            }

        default:
            return state
    }
}