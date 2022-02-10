// import { createAction, createReducer } from "@reduxjs/toolkit"

// const defaultState = {
//   count: 0
// }

// const ADD_COUNT = 'ADD_COUNT'

// export const renderCountReducer = (state = defaultState, action) => {
//   switch (action.type) {
//     case ADD_COUNT:
//       return {...state, count: state.count + 1}
  
//     default:
//       return state
//   }
// }

// export const addCount = () => ({type: ADD_COUNT})

// !!!!!!! Rewritten with createReducer !!!!!!!!!!!!!!!!!!!!!! V

// export const addCount = createAction('ADD_COUNT')

// export default createReducer(defaultState, {
//   [addCount]: function (state) {
//     state.count = state.count + 1
//   }
// })
