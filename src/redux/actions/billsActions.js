export const fetchBills = () => dispatch => {
    return fetch('http://localhost:3001/bills')
    .then(handleError)
    .then(bills => dispatch({ type: 'FETCH_BILLS_SUCCESS', payload: bills}))
    .catch(error => console.log(error))
}

export const fetchBill = (billId) => dispatch => {
    return fetch(`http://localhost:3001/bills/${billId}`)
    .then(handleError)
    .then(bill => dispatch({ type: 'FETCH_BILL_SUCCESS', payload: bill}))
    .catch(error => console.log(error))
}

export const addBill = (bill) => dispatch => {
    return fetch('http://localhost:3001/bills', {
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


//this action is not executing past line 33
// export const deleteBill = (id) => dispatch => {
//     debugger
//     return dispatch(
//         {
//         type: 'DELETE_BILL_SUCCESS',
//         message: console.log('inside dispatch of action'),
//         id: id
//     })
// }




function handleError(response){
    if (!response.ok) {
        console.log(response)
        return Promise.reject(response.statusText)
    }
    return response.json()
}

