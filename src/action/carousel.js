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
    MAX_FETCH_RESULT,
} from '../constant';
import { save_carousel, get_carousel, delete_carousel } from '../helper/api'

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
export function handleFetchCarousel(max) {
    //call the get_news here.
    return (dispatch) => {
        dispatch(requestHelper(FETCH_ALL_CAROUSEL_REQUEST))
        return get_carousel(max).then((resp)=>{
            dispatch(responseHelper(FETCH_ALL_CAROUSEL_SUCCESS, resp))
        })
        .catch((err) => dispatch(responseHelper(FETCH_ALL_CAROUSEL_FAILURE, err)))
    }
}

export function handleAddCarousel(object, editing) {
    //call the get_new  s here").
    return (dispatch) => {
        dispatch(requestHelper(ADD_CAROUSEL_REQUEST))
        return save_carousel(object, editing)
         .then((resp) => {
             console.log("response adding is ", resp)

             dispatch(responseHelper(ADD_CAROUSEL_SUCCESS, resp))
             dispatch(handleFetchCarousel(19))
             
         })
         .catch((err) => dispatch(responseHelper(ADD_CAROUSEL_FAILURE, err)))
    }
}

    //call the delete here.

export function handleDeleteCarousel(id) {
    return (dispatch) => {
        dispatch(requestHelper(DELETE_CAROUSEL_REQUEST))
        return delete_carousel(id).then((resp) => {

            dispatch(responseHelper(DELETE_CAROUSEL_SUCCESS, resp))
            dispatch(handleFetchCarousel(MAX_FETCH_RESULT))

        })
            .catch((err) => dispatch(responseHelper(DELETE_CAROUSEL_FAILURE, err)))
    }

}