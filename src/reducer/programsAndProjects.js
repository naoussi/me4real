
import {

    FETCH_ALL_PROJECTS_REQUEST,
    FETCH_ALL_PROJECTS_SUCCESS,
    FETCH_ALL_PROJECTS_FAILURE,

    POST_PROJECT_REQUEST,
    POST_PROJECT_SUCCESS,
    POST_PROJECT_FAILURE,

    DELETE_PROJECT_REQUEST,
    DELETE_PROJECT_SUCCESS,
    DELETE_PROJECT_FAILURE

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
    },
    projectDeletion: {
        isDeleting: false,
        deleted: null,
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

        // HANDLERS FOR DELETION OF A PROJECT
        case DELETE_PROJECT_REQUEST:
            return {
                ...state,
                projectDeletion: {
                    ...state.projectDeletion,
                    isDeleting: true,
                    deleted: null,
                    error: null
                }
            };

        case DELETE_PROJECT_SUCCESS:
            return {
                ...state,
                projectDeletion: {
                    ...state.projectDeletion,
                    isDeleting: false,
                    // deleted: action.payload.result,
                    deleted: {success: true},
                    error: null
                }
            };

        case DELETE_PROJECT_FAILURE:
            return {
                ...state,
                projectDeletion: {
                    ...state.projectDeletion,
                    isDeleting: false,
                    deleted: null,
                    // error: action.payload.result
                    error: {failure: true}
                }
            };

        default:
            return state;
    }
};