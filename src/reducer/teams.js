import {
    FETCH_ALL_TEAM_REQUEST,
    FETCH_ALL_TEAM_SUCCESS,
    FETCH_ALL_TEAM_FAILURE,

    ADD_TEAM_REQUEST,
    ADD_TEAM_SUCCESS,
    ADD_TEAM_FAILURE,

    DELETE_TEAM_REQUEST,
    DELETE_TEAM_SUCCESS,
    DELETE_TEAM_FAILURE,
} from '../constant'

export default function team(state = {}, action) {
    switch (action.type) {
        //FETCHING
        case FETCH_ALL_TEAM_REQUEST:
            return {
                ...state,
                isFetching: true,
            }
        case FETCH_ALL_TEAM_SUCCESS:
            return {
                ...state,
                isFetching: false,
                team: action.payload.result,
            }
        case FETCH_ALL_TEAM_FAILURE:
            return {
                ...state,
                isFetching: false,
                fail: action.payload.result,
            }

        // Adding NEW EVENT
        case ADD_TEAM_REQUEST:
            return {
                ...state,
                isSaving: true,

            }

        case ADD_TEAM_SUCCESS:
            return {
                ...state,
                isSaving: false,
                team: [...state.TEAM, action.payload.result]
            }
        case ADD_TEAM_FAILURE:
            return {
                ...state,
                isSaving: false,
                fail: action.payload.result,
            }

        // Deleting the event

        case DELETE_TEAM_REQUEST:
            return {
                isDeleting: true,
                ...state,

            }
        case DELETE_TEAM_SUCCESS:
            return {
                isDeleting: false,
                ...state,
            }

        case DELETE_TEAM_FAILURE:
            return {
                isDeleting: false,
                ...state,
                fail: action.payload.result,
            }

        default:
            return state
    }
}