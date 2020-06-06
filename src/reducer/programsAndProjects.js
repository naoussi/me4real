
import {

    FETCH_ALL_PROJECTS_REQUEST,
    FETCH_ALL_PROJECTS_SUCCESS,
    FETCH_ALL_PROJECTS_FAILURE

} from  '../constant'

const initialState = {
    programs: {
        isFetching: false,
        data: null,
        error: null
    },
    projects: {
        isFetching: false,
        data: null,
        error: null
    }
};

export const programsAndProjects = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ALL_PROJECTS_REQUEST:
            return {
                ...state,
                projects: {
                    isFetching: true,
                    data: null,
                    error: null
                }
            };
        case FETCH_ALL_PROJECTS_SUCCESS:
            return {
                ...state,
                projects: {
                    isFetching: false,
                    data: action.payload.result,
                    error: null
                }
            };
        case FETCH_ALL_PROJECTS_FAILURE:
            return {
                ...state,
                projects: {
                    isFetching: false,
                    data: action.payload.result,
                    error: null
                }
            };
        default:
            return state;
    }
};