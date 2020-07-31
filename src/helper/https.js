export default {

    //for making a get request
    get: (url) => {
        return fetch(url, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })

    },


    //for making a post request
    post: (url, body, headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    }) => {
        return fetch(url, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(body),
        })

    },
    //for making a put request
    put: (url, body) => {
        return fetch(url, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `${localStorage.getItem('token')}`,

            },
            body: JSON.stringify(body),
        })

    },

    //for making a patch request
    patch: (url, body) => {
        return fetch(url, {
            method: 'PATCH',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token'),

            },
            body: JSON.stringify(body),
        })

    },

    //for making delete request
    delete: (url) => {
        return fetch(url, {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })

    },


}