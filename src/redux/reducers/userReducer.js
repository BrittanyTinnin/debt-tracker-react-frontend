const initialState = {
   users: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        // case 'FETCH_BILLS_SUCCESS':
        // return {...state, bills: action.payload}

        default:
            return state
    }
}
