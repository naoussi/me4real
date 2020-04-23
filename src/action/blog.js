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

} from '../constant';
import { get_blog, add_blog, delete_blog } from '../helper/api'
import { dispatch } from 'rxjs/internal/observable/pairs';


//payload is the response or data to be set to store
function requestHelper(req, payload = null) {
    return {
        type: req,
        payload,
    }
}

// req is going to be the constant 
//payload is the response or data to be set to store
function responseHelper(req, payload) {
    return {
        type: req,
        payload: payload,
    }
}

//fetching of all BLOG here
export function handleFetchBlog(max) {
    return (dispatch) => {
        dispatch(requestHelper(FETCH_ALL_BLOG_REQUEST))
        return get_blog(max).then((resp) => {
            dispatch(responseHelper(FETCH_ALL_BLOG_SUCCESS, resp))
        })
            .catch((err) => dispatch(responseHelper(FETCH_ALL_BLOG_FAILURE, err)))
    }
}
//Adding of a single blog here
export function handleAddBlog(blog, editing) {
    return (dispatch) => {
        dispatch(requestHelper(ADD_BLOG_REQUEST))
        return add_blog(blog, editing).then((resp) => {
            dispatch(responseHelper(ADD_BLOG_SUCCESS, resp))
        })
            .catch((err) => dispatch(responseHelper(ADD_BLOG_FAILURE, err)))
    }
}
//deleting of a single event here
export function handleDeleteBlog(blog_id) {
    return (dispatch) => {
        dispatch(requestHelper(DELETE_BLOG_REQUEST))
        return delete_blog(blog_id).then((resp) => {
            dispatch(responseHelper(DELETE_BLOG_SUCCESS, resp))
        })
            .catch((err) => dispatch(responseHelper(DELETE_BLOG_FAILURE, err)))
    }
}