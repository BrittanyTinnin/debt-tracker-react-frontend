export const fetchBills = () => dispatch => {
    return fetch('http://localhost:3001/bills')
    .then(res => res.json())
    .then(bills => dispatch({ type: 'FETCH_BILLS_SUCCESS', payload: bills}))
}