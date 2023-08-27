import { nanoid } from "nanoid";
import { create } from "zustand";
import { devtools, persist } from 'zustand/middleware';
import { toast } from 'react-toastify';

const dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const store = (set) => ({
  todos: [],
  modal: false,
  draggedTodo: null,
  moveTodo: (draggedTodo, priority) => {
    set(state => ({
      todos: [...state.todos.filter(todo => todo.title !== draggedTodo), { id: nanoid(), title: draggedTodo, priority, day: dayOfWeek[new Date(Date.now()).getDay()], completed: false, stored: new Date(Date.now()).toLocaleString() }]
    }));
  },
  setDraggedTodo: (title, priority) => set({ draggedTodo: title, priority: priority }),
  addTodo: (title, priority) => {
    if (title.length < 1 || title.length > 50) {
      return toast("Title must be between 1 and 50 characters");
    }
    set(state => ({
      todos: [...state.todos, { id: nanoid(), title: title.trim(), priority, day: dayOfWeek[new Date(Date.now()).getDay()], completed: false, stored: new Date(Date.now()).toLocaleString() }]
    }));
  },
  deleteTodo: (id) => {
    set(state => ({
      todos: state.todos.filter(todo => todo.id !== id)
    }));
  },
  openModal: () => set(state => ({ modal: state.modal = true })),
  closeModal: () => set(state => ({ modal: state.modal = false }))
});

export const useTodos = create(persist(devtools(store), { name: "store" }));