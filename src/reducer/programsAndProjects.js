
import {

    FETCH_ALL_PROJECTS_REQUEST,
    FETCH_ALL_PROJECTS_SUCCESS,
    FETCH_ALL_PROJECTS_FAILURE,
    POST_PROJECT_REQUEST,
    POST_PROJECT_SUCCESS,
    POST_PROJECT_FAILURE

} from '../constant';

const initialState = {
    programs: {
        isFetching: false,
        data: null,
        error: null
    },
    posting: {
        isPosting: false,
        success: false,
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

        case POST_PROJECT_REQUEST:
            return {
                ...state,
                posting: {
                    isPosting: true,
                    success: false,
                    error: null,
                }
            };

        case POST_PROJECT_SUCCESS:
            return {
                ...state,
                posting: {
                    isPosting: false,
                    success: true,
                    error: null,
                }
            };

        case POST_PROJECT_FAILURE:
            return {
                ...state,
                posting: {
                    isPosting: false,
                    success: false,
                    error: action.payload.result
                }
            };
        default:
            return state;
    }
};