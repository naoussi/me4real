import {
    FETCH_ALL_CAROUSEL_REQUEST,
    FETCH_ALL_CAROUSEL_SUCCESS,
    FETCH_ALL_CAROUSEL_FAILURE,

    ADD_CAROUSEL_REQUEST,
    ADD_CAROUSEL_SUCCESS,
    ADD_CAROUSEL_FAILURE,

    DELETE_CAROUSEL_REQUEST,
    DELETE_CAROUSEL_SUCCESS,
    DELETE_CAROUSEL_FAILURE,

} from '../constant'
// constant for fetching carous
export default function carousel(state = {}, action) {
    switch (action.type) {
        case FETCH_ALL_CAROUSEL_REQUEST:
            return {
                ...state,
                isFetching: true,
                error: null

            }
        case FETCH_ALL_CAROUSEL_SUCCESS:
            return {
                ...state,
                carousel: action.payload.result,
                isFetching: false,
                error: null
            }
        case FETCH_ALL_CAROUSEL_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: "Whoops something went wrong fetching carousel"
                
            }


            //Adding carousel
        case ADD_CAROUSEL_REQUEST:
            return {
                ...state,
                isSaving: true,
                
            }
        case ADD_CAROUSEL_SUCCESS:
            return {
                ...state,
                isSaving: false,
                carousel: [...state.carousel, {...action.payload.result}],
                error: null,


            }
        case ADD_CAROUSEL_FAILURE:
            return {
                ...state,
                isSaving: false,
                error: "Whoops something went wrong Adding carousel"

            }

        // Deleting carousel image
        case DELETE_CAROUSEL_REQUEST: 
            return {
                ...state,
                isDeleting: true,
                error: null,
            }
        
        case DELETE_CAROUSEL_SUCCESS: 
            return {
                ...state,
                isDeleting: false,
                success: action.payload.result,
                error: null,
            }
        case DELETE_CAROUSEL_FAILURE: 
            return {
                ...state,
                isDeleting: false,
                fail: action.payload.result,
                error: "Whoops something went wrong Deleting carousel"

            }

        default:
            return state
    }
}