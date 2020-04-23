import {
    FETCH_ALL_NEWS_REQUEST,
    FETCH_ALL_NEWS_SUCCESS,
    FETCH_ALL_NEWS_FAILURE,

    ADD_NEWS_REQUEST,
    ADD_NEWS_SUCCESS,
    ADD_NEWS_FAILURE,

    DELETE_NEWS_REQUEST,
    DELETE_NEWS_SUCCESS,
    DELETE_NEWS_FAILURE,
    MAX_FETCH_RESULT,

} from '../constant';
import { get_news, add_news, delete_news } from '../helper/api'
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

//fetching of all NEWS here
export function handleFetchNews(max) {
    return (dispatch) => {
        dispatch(requestHelper(FETCH_ALL_NEWS_REQUEST))
        return get_news(max).then((resp) => {
            dispatch(responseHelper(FETCH_ALL_NEWS_SUCCESS, resp))
        })
            .catch((err) => dispatch(responseHelper(FETCH_ALL_NEWS_FAILURE, err)))
    }
}
//Adding of a single event here
export function handleAddNews(news, editing) {
    return (dispatch) => {
        dispatch(requestHelper(ADD_NEWS_REQUEST))
        return add_news(news, editing).then((resp) => {
            dispatch(responseHelper(ADD_NEWS_SUCCESS, resp))
        })
            .catch((err) => dispatch(responseHelper(ADD_NEWS_FAILURE, err)))
    }
}
//deleting of a single event here
export function handleDeleteNews(news_id) {
    return (dispatch) => {
        dispatch(requestHelper(DELETE_NEWS_REQUEST))
        return delete_news(news_id).then((resp) => {
            dispatch(responseHelper(DELETE_NEWS_SUCCESS, resp))
            dispatch(handleFetchNews(MAX_FETCH_RESULT))

        })
            .catch((err) => dispatch(responseHelper(DELETE_NEWS_FAILURE, err)))
    }
}