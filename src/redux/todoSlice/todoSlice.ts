import { createSlice } from '@reduxjs/toolkit'
let id = 4

export interface Item {
    id:number
    title: string
    complated: boolean
}

function storage(): Item[]{
    if (!localStorage.getItem("task")){
      localStorage.setItem("task", JSON.stringify([]))
      return [];
    }
    return JSON.parse(localStorage.getItem("task") as string) as Item[];}

export const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    items: storage(),
    activeFilter: 'all',
},
  reducers: {
    toggle: (state, action) => {
      const { id } = action.payload
      const item = state.items.find((item) => item.id === id)
      if (item) {
      item.complated = !item.complated
        
      }
    },
    addTodo: (state, action) => {
      state.items.push({
        id: id,
        title: action.payload,
        complated: false,
      })
      id++
      localStorage.setItem("task", JSON.stringify(state.items));
    },
    deleteTodo:  (state, action) => {
      const { id } = action.payload
      
      const target = state.items.find((item) => item.id === id)
      if (target) {
        
          const indexOfTarget = state.items.indexOf(target)
          state.items.splice(indexOfTarget, 1)
      }
      localStorage.setItem("task", JSON.stringify(state.items));
    },
    changeActiveFilter: (state, action) => {
      state.activeFilter = action.payload
    },
    clearCompleted: (state) => {
      state.items = state.items.filter((item) => item.complated === false)
    localStorage.setItem("task", JSON.stringify(state.items));

    },
  },
})
export const {
  toggle,
  addTodo,
  deleteTodo,
  clearCompleted,
  changeActiveFilter,
} = todoSlice.actions
export default todoSlice.reducer