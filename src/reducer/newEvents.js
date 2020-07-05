
import {
    NEW_ADD_EVENT_REQUEST,
    NEW_ADD_EVENT_FAILURE,
    NEW_ADD_EVENT_SUCCESS,
    NEW_FETCH_EVENTS_REQUEST,
    NEW_FETCH_EVENTS_SUCCESS,
    NEW_FETCH_EVENTS_FAILURE,
    NEW_DELETE_EVENT_REQUEST, NEW_DELETE_EVENT_SUCCESS, NEW_DELETE_EVENT_FAILURE
} from "../constant";

const initialState = {
    allEvents: {
        isFetching: false,
        data: null,
        error: null
    },
    addEvent: {
        isAdding: false,
        added: null,
        error: null
    },
    deleteEvent: {
        isDeleting: false,
        deleted: false,
        error: null,
    }
};

export const newEvents = (state = initialState, action) => {
    switch (action.type) {
        case NEW_FETCH_EVENTS_REQUEST:
            return {
                ...state,
                allEvents: {
                    isFetching: true,
                    data: null,
                    error: null
                }
            };

        case NEW_FETCH_EVENTS_SUCCESS:
            return {
                ...state,
                allEvents: {
                    isFetching: false,
                    data: action.payload.result,
                    error: null
                }
            };

        case NEW_FETCH_EVENTS_FAILURE:
            return {
                ...state,
                allEvents: {
                    isFetching: false,
                    data: null,
                    error: {}
                }
            };

        case NEW_ADD_EVENT_REQUEST:
            return {
                ...state,
                addEvent: {
                    isAdding: true,
                    added: null,
                    error: null
                }
            };

        case NEW_ADD_EVENT_SUCCESS:
            return {
                ...state,
                addEvent: {
                    isAdding: false,
                    added: {success: true},
                    error: null
                }
            };

        case NEW_ADD_EVENT_FAILURE:
            return {
                ...state,
                addEvent: {
                    isAdding: false,
                    added: null,
                    error: action.payload
                }
            };

        case NEW_DELETE_EVENT_REQUEST:
            return {
                ...state,
                deleteEvent: {
                    isDeleting: true,
                    deleted: false,
                    error: null
                }
            };

        case NEW_DELETE_EVENT_SUCCESS:
            return {
                ...state,
                deleteEvent: {
                    isDeleting: false,
                    deleted: true,
                    error: null
                }
            };

        case NEW_DELETE_EVENT_FAILURE:
            return {
                ...state,
                deleteEvent: {
                    isDeleting: false,
                    deleted: false,
                    error: null
                }
            };

        default:
            return state
    }
};