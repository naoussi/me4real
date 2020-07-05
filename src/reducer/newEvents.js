
import {
    NEW_ADD_EVENT_REQUEST,
    NEW_ADD_EVENT_FAILURE,
    NEW_ADD_EVENT_SUCCESS
} from "../constant";

const initialState = {
    addEvent: {
        isAdding: false,
        added: null,
        error: null
    }
};

export const newEvents = (state = initialState, action) => {
    switch (action.type) {
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

        default:
            return state
    }
};