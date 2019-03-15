export const fetchBills = () => dispatch => {
    return fetch('http://localhost:3001/bills')
    .then(res => res.json())
    .then(bills => dispatch({ type: 'FETCH_BILLS_SUCCESS', payload: bills}))
}

export const fetchBill = (billId) => dispatch => {
    return fetch(`http://localhost:3001/bills/${billId}`)
    .then(res => res.json())
    .then(bill => dispatch({ type: 'FETCH_BILL_SUCCESS', payload: bill}))
}

export const addBill = () => dispatch => {
    console.log('inside actions addBill')
    //fetch -- method: POST
    
}


