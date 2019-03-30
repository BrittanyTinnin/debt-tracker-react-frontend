export const signUp = (user) => dispatch => {
    console.log('inside signUp')
    return fetch('http://localhost:3001/api/users', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(handleError)
    .then(user => console.log(user))
    .catch(error => console.log(error))
}

export const authenticate = () => dispatch => {

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