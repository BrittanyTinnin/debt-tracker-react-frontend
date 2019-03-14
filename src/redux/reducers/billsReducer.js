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

        case 'RESET_BILLS':
            return [...state, initialState]
           

        case 'DELETE_BILL':
            return action.payload
        
        default:
            return state
    }
}

// function fetchBillSuccess(state, action) {

// }

// function appReducer(state = initialState, action) {
//     switch (action.type) {
//       case 'SET_VISIBILITY_FILTER':
//         return setVisibilityFilter(state, action)
//       case 'ADD_TODO':
//         return addTodo(state, action)
//       case 'TOGGLE_TODO':
//         return toggleTodo(state, action)
//       case 'EDIT_TODO':
//         return editTodo(state, action)
//       default:
//         return state
//     }
//   }

//   function addTodo(state, action) {
//     const newTodos = state.todos.concat({
//       id: action.id,
//       text: action.text,
//       completed: false
//     })