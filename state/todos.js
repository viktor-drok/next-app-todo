import { nanoid } from "nanoid";
import { create } from "zustand";
import { devtools, persist } from 'zustand/middleware';
import { toast } from 'react-toastify';

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const getDayOfWeek = () => {
  return daysOfWeek[new Date(Date.now()).getDay()];
};

const whenStoredTodo = () => {
  return new Date(Date.now()).toLocaleString();
};

const store = (set) => ({
  todos: [],
  modal: false,
  draggedTodo: null,
  day: "",
  isCompleted: null,

  toggleCompleted: (title) => {
    set(state => ({
      todos: state.todos.map(todo => {
        if (todo.title === title) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    }));
  },

  setIsCompleted: (copleted) => set({ isCompleted: copleted }),

  moveTodo: (draggedTodo, priority, day) => {
    set(state => ({
      todos: [...state.todos.filter(todo => todo.title !== draggedTodo), { id: nanoid(), title: draggedTodo, priority, day, completed: state.isCompleted, stored: whenStoredTodo() }]
    }));
  },

  setDraggedTodo: (title) => set({ draggedTodo: title }),

  setDay: (title) => set({ day: title }),

  addTodo: (title, priority, day) => {
    if (title.length < 1 || title.length > 50) {
      return toast("Title must be between 1 and 50 characters");
    }
    set(state => ({
      todos: [...state.todos, { id: nanoid(), title: title.trim(), priority, day, completed: false, stored: whenStoredTodo() }]
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