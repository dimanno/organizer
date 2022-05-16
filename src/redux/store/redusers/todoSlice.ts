// import { createSlice } from '@reduxjs/toolkit';
// import { ITodo, ITodosState} from '../../../interfaces/interfaces';


// const todosSlice = createSlice({
//   name: 'todos',
//   initialState: {
//     todo: {},
//     todos: []
//   },
//   reducers: {
//     createTodo(state, action) {
//         state.todo = {
//             id: action.payload.id,
//             title: action.payload.title,
//             completed: false, 
//         }
//     },
//     todoAdded(state: ITodosState, action) {
//       state.todos.push(
       
//       )
//     },

//     removeTodo(state: ITodosState, action) {
//         state.todos.filter(value => value.id !== action.payload.id)
//     }


//     // todoToggled(state: any[], action) {
//     //   const todo = state.find(todo => todo.id === action.payload)
//     //   todo.completed = !todo.completed
//     // }
//   }
// })

// export const { todoAdded, removeTodo, createTodo } = todosSlice.actions
// export default todosSlice.reducer
export {}