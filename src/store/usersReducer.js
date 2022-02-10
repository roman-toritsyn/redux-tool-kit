
import { createSlice } from "@reduxjs/toolkit"

// const defaultState = {
//   users: [{name: 'Roman', id: 1}]
// }

// const ADD_USER = 'ADD_USER'
// const DELETE_USER = 'DELETE_USER'

// export const usersReducer = (state = defaultState, action) => {
//   switch (action.type) {
//     case ADD_USER:
//       if (!state.users.find(user => user.name === action.payload.name)){
//         return { ...state, users: [...state.users, action.payload]}
//       } else {
//         return state
//       }

//     case DELETE_USER:
//       return { ...state, users: [...state.users.filter(user => user.name !== action.payload)] }

//     default:
//       return state
//   }
// }

// export const addUserAction = (payload) => ({ type: ADD_USER, payload })
// export const deleteUserAction = (payload) => ({ type: DELETE_USER, payload })

const globalReducer = createSlice({
  name: 'globalReducer',
  initialState: {
    count: 0,
    users: [{name: 'Roman', id: 1}],
  },
  reducers: {
    addCount(state) {
      state.count = state.count + 1
    },
    addUser(state, action) {
      if (!state.users.find(user => user.name === action.payload)){
        state.users.push({ name: action.payload, id: Date.now })
      }
    },
    deleteUser(state, action) {

      state.users = state.users.filter(user => user.name !== action.payload)
    }
  }
})

export default globalReducer.reducer
export const { addCount, addUser, deleteUser } = globalReducer.actions
