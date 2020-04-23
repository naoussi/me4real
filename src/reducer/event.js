import { 
    FETCH_ALL_EVENTS_REQUEST,
    FETCH_ALL_EVENTS_SUCCESS,
    FETCH_ALL_EVENTS_FAILURE,

    ADD_EVENTS_REQUEST,
    ADD_EVENTS_SUCCESS,
    ADD_EVENTS_FAILURE,

    DELETE_EVENTS_REQUEST,
    DELETE_EVENTS_SUCCESS,
    DELETE_EVENTS_FAILURE,

} from '../constant'


export default function event(state = {}, action) {
    switch (action.type) {
        //FETCHING
        case FETCH_ALL_EVENTS_REQUEST:
            return {
                ...state,
                isFetching: true,
            }
        case FETCH_ALL_EVENTS_SUCCESS: 
            return {
                ...state,
                isFetching: false,
                events: action.payload.result,
            }
        case FETCH_ALL_EVENTS_FAILURE: 
            return {
                ...state,
                isFetching: false,
                fail: action.payload.result,
            }

    // Adding NEW EVENT
        case ADD_EVENTS_REQUEST:
            return {
                ...state,
                isSaving: true,

            }

        case ADD_EVENTS_SUCCESS:
            return {
                ...state,
                isSaving: false,
                events: [...state.events, action.payload.result]
            }
        case ADD_EVENTS_FAILURE:
            return {
                ...state,
                isSaving: false,
                fail: action.payload.result,
            }

        // Deleting the event

        case DELETE_EVENTS_REQUEST:
            return { 
                isDeleting: true,
                ...state,

            }
        case DELETE_EVENTS_SUCCESS: 
            return {
                isDeleting: false,
                ...state,
            }
        
        case DELETE_EVENTS_FAILURE: 
            return {
                isDeleting: false,
                ...state,
                fail: action.payload.result,
            }

        default:
            return state
    }
}