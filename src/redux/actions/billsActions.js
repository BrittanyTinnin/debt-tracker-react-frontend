export const fetchBills = () => dispatch => {
    return fetch('http://localhost:3001/api/bills')
    .then(handleError)
    .then(bills => dispatch({ type: 'FETCH_BILLS_SUCCESS', payload: bills}))
    .catch(error => console.log(error))
}

export const fetchBill = (billId) => dispatch => {
    return fetch(`http://localhost:3001/api/bills/${billId}`)
    .then(handleError)
    .then(bill => dispatch({ type: 'FETCH_BILL_SUCCESS', payload: bill}))
    .catch(error => console.log(error))
}

export const addBill = (bill) => dispatch => {
    return fetch('http://localhost:3001/api/bills', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bill)
    })
    .then(handleError)
    .then(bill => dispatch({ type: 'ADD_BILL_SUCCESS', payload: bill }))
    .catch(error => console.log(error))
}




function handleError(response){
    if (!response.ok) {
        console.log(response)
        return Promise.reject(response.statusText)
    }
    return response.json()
}

