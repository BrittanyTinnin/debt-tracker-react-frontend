const initialState = {
   users: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SIGNUP':
        console.log('inside sigup reducer')
        return {...state, users: action.payload}

        default:
            return state
    }
}
