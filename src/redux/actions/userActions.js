
// export const LOGIN_REQUEST = 'LOGIN_REQUEST'
// export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
// export const LOGIN_FAILURE = 'LOGIN_FAILURE'

// function requestLogin(creds) {
//   return {
//     type: LOGIN_REQUEST,
//     creds
//   }
// }

// function receiveLogin(token) {
//   return {
//     type: LOGIN_SUCCESS,
//     token: token
//   }
// }

// function loginError(message) {
//   return {
//     type: LOGIN_FAILURE,
//     message
//   }
// }

export const signUp = (user) => dispatch => {
    console.log('inside signUp')
    return fetch('http://localhost:3001/api/users', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({user})
    })
    .then(handleError)
    // .then(resp => console.log(resp))
    .then(user => dispatch(authenticate(user)))
    // .then(user => dispatch({ type: 'AUTHENTICATION_SUCCESS', payload: user}))
    .catch(error => console.log(error))
}

export const authenticate = (userCred) => dispatch => {
    console.log('inside action authenticate')
    return fetch('http://localhost:3001/api/user_token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({userCred})
    })
    .then(handleError)
    .then(resp => console.log(resp))
    .catch(error => console.log(error))
}

export const login = () => dispatch => {

}

export const logout = () => dispatch => {

}


function handleError(response){
    if (!response.ok) {
        console.log(response)
        return Promise.reject(response.statusText)
    }
    return response.json()
}