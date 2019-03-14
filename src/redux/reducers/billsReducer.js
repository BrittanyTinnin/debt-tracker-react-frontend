const initialState = {
    bills: [],
    bill: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_BILLS_SUCCESS':
            return {...state, bills: action.payload}

        case 'FETCH_BILL_SUCCESS':
            return {...state, bill: action.payload}
        
        default:
            return state
    }
}
