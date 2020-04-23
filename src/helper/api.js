import axios from 'axios'
// import axios from axioshttp://52.57.143.91:5000/
const url = 'http://ec2-3-18-187-103.us-east-2.compute.amazonaws.com/api'
export function save_carousel(body, editing) {
    if(editing){
        console.log("I am making put request")
        return fetch(`${url}/carousel/`, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',

            },
            body: JSON.stringify(body),
        })
            .then((response) => response.json())
            .catch(err => console.log("rrr ", err))

    }
    else{
        console.log("I am making post request")
        return fetch(`${url}/carousel/`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',

            },
            body: JSON.stringify(body),
        })
        .then((response) => response.json())
        .catch(err => console.log("rrr ", err))
    } 

}
// export function get_carousel(body) {
//     return fetch(`${url}/carousel/`, {
//         method: 'POST',
//         headers: {
//             Accept: 'application/json',
//             'Content-Type': 'application/json',

//         },
//         body: JSON.stringify(body),
//     })
// }

// export function get_carousel(max) {
//     console.log("something is wrong here")
//     return axios.get(`${url}/carousel?max=${max}`, {
//         headers: {
//             'Content-Type': 'application/json'
//         }})
//     .then((response) => response.json())
//     .catch(err => console.log("someting happen with error ", err))
// }
export function get_carousel(max) {
    console.log("something is wrong here")
    return fetch(`${url}/carousel/?max=${max}`, { headers: { Authorization: "men", "Access-Control-Allow-Origin": "*", 'Content-Type': 'application/json'} })
        .then((response) => response.json())
    .catch(err => console.log("someting happen with error ", err))
}
 

//DELETE THE CAROUSEL IMAGE
export function delete_carousel(id) {
    return fetch(`${url}/carousel/?id=${id}`, {
        method: 'DELETE',
    })
        .then((response) => response.json())
        .catch(err => console.log("rrr ", err))
}




/********************************************************************* */
/* EVENTES METHODS                                                   */
/*                                                                     */
/* *********************************************************************/
export function add_event(body, editing) {
    if(editing){
        return fetch(`${url}/event/`, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',

            },
            body: JSON.stringify(body),
        })
            .then((response) => response.json())
            .catch(err => console.log("rrr ", err))

    }
    else{
        return fetch(`${url}/event/`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',

            },
            body: JSON.stringify(body),
        })
        .then((response) => response.json())
        .catch(err => console.log("rrr ", err))
    } 

}

//GET THE EVENT
export function get_events(max) {
    console.log("something is wrong here")
    return fetch(`${url}/event/?max=${max}`, { headers: { Authorization: "men", "Access-Control-Allow-Origin": "*", 'Content-Type': 'application/json'} })
        .then((response) => response.json())
    .catch(err => console.log("someting happen with error ", err))
}
 

//DELETE THE EVENT
export function delete_event(id) {
    return fetch(`${url}/event/?id=${id}`, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',

        },
    })
        .then((response) => response.json())
        .catch(err => console.log("rrr ", err))
}

/********************************************************************* */
/* NEWS METHODS                                                   */
/*                                                                     */
/* *********************************************************************/
export function add_news(body, editing) {
    if(editing){
        return fetch(`${url}/news/`, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',

            },
            body: JSON.stringify(body),
        })
            .then((response) => response.json())
            .catch(err => console.log("rrr ", err))

    }
    else{
        return fetch(`${url}/news/`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',

            },
            body: JSON.stringify(body),
        })
        .then((response) => response.json())
        .catch(err => console.log("rrr ", err))
    } 

}

//GET THE news
export function get_news(max) {
    return fetch(`${url}/news/?max=${max}`, { headers: { Authorization: "men", "Access-Control-Allow-Origin": "*", 'Content-Type': 'application/json'} })
        .then((response) => response.json())
    .catch(err => console.log("someting happen with error ", err))
}
 

//DELETE THE news
export function delete_news(id) {
    return axios.delete(`${url}/news/?id=${id}`)
        .then((response) => response)
        .catch(err => console.log("rrr ", err))
}





/********************************************************************* */
/* TEAMS METHODS                                                   */
/*                                                                     */
/* *********************************************************************/
export function add_team(body, editing) {
    if (editing) {
        return fetch(`${url}/teams/`, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',

            },
            body: JSON.stringify(body),
        })
            .then((response) => response.json())
            .catch(err => console.log( err))

    }
    else {
        return fetch(`${url}/teams/`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',

            },
            body: JSON.stringify(body),
        })
            .then((response) => response.json())
            .catch(err => console.log( err))
    }

}

//GET THE news
export function get_team(max) {
    return fetch(`${url}/teams/?max=${max}`, { headers: { Authorization: "men", "Access-Control-Allow-Origin": "*", 'Content-Type': 'application/json' } })
        .then((response) => response.json())
        .catch(err => console.log("someting happen with error ", err))
}


//DELETE THE team
export function delete_team(id) {
    return fetch(`${url}/teams/?id=${id}`, {
        method: 'delete',
        headers: {
            Accept: 'text/plain',
            'Content-Type': 'text/plain',
            "Access-Control-Allow-Origin": "http://127.0.0.1:5000",
            'Access-Control-Allow-Methods': 'DELETE'

        },
    })
        .then((response) => response.json())
        .catch(err => console.log( err))
}





/********************************************************************* */
/* NEWS METHODS                                                   */
/*                                                                     */
/* *********************************************************************/
export function add_blog(body, editing) {
    if (editing) {
        return fetch(`${url}/blog/`, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',

            },
            body: JSON.stringify(body),
        })
            .then((response) => response.json())
            .catch(err => console.log("rrr ", err))

    }
    else {
        return fetch(`${url}/blog/`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',

            },
            body: JSON.stringify(body),
        })
            .then((response) => response.json())
            .catch(err => console.log("rrr ", err))
    }

}

//GET THE blog
export function get_blog(max) {
    return fetch(`${url}/blog/?max=${max}`, { headers: { Authorization: "men", "Access-Control-Allow-Origin": "*", 'Content-Type': 'application/json' } })
        .then((response) => response.json())
        .catch(err => console.log("someting happen with error ", err))
}


//DELETE THE blog
export function delete_blog(id) {
    return axios.delete(`${url}/blog/?id=${id}`)
        .then((response) => response)
        .catch(err => console.log("rrr ", err))
}







/********************************************************************* */
/* Videos METHODS                                                   */
/*                                                                     */
/* *********************************************************************/
export function add_video(body, editing) {
    if (editing) {
        return fetch(`${url}/video/`, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',

            },
            body: JSON.stringify(body),
        })
            .then((response) => response.json())
            .catch(err => console.log(err))

    }
    else {
        return fetch(`${url}/video/`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',

            },
            body: JSON.stringify(body),
        })
            .then((response) => response.json())
            .catch(err => console.log(err))
    }

}

//GET THE news
export function get_video(max) {
    return fetch(`${url}/video/?max=${max}`, { headers: { Authorization: "men", "Access-Control-Allow-Origin": "*", 'Content-Type': 'application/json' } })
        .then((response) => response.json())
        .catch(err => console.log("someting happen with error ", err))
}


//DELETE THE video
export function delete_video(id) {
    return fetch(`${url}/video/?id=${id}`, {
        method: 'delete',
        headers: {
            Accept: 'text/plain',
            'Content-Type': 'text/plain',
            "Access-Control-Allow-Origin": "http://127.0.0.1:5000",
            'Access-Control-Allow-Methods': 'DELETE'

        },
    })
        .then((response) => response.json())
        .catch(err => console.log(err))
}
