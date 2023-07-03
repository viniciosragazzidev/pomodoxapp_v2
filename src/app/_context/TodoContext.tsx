"use client";

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";

export type TodoType = {
  id: number;
  title: string;
  description: string;
  date: string;
  completed: boolean;
  category: string;
  activedRemider: boolean;
  priority: string;
};
export type TodoContextType = {
  todos: Array<TodoType>;
  setTodos: Dispatch<SetStateAction<TodoType[]>>;
  allUsersTodos: object;
  setAllUsersTodos: Dispatch<SetStateAction<object>>;
  openModalTodo: boolean;
  setOpenModalTodo: Dispatch<SetStateAction<boolean>>;
  openModalEditTodo: boolean;
  setOpenModalEditTodo: Dispatch<SetStateAction<boolean>>;
  currentTodoEditId: number;
  setCurrentTodoEditId: Dispatch<SetStateAction<number>>;
};

export const TodoContext = createContext<TodoContextType>({
  allUsersTodos: {},
  setAllUsersTodos: () => {},
  todos: [],
  setTodos: () => {},
  openModalTodo: false,
  setOpenModalTodo: () => {},
  openModalEditTodo: false,
  setOpenModalEditTodo: () => {},
  currentTodoEditId: 0,
  setCurrentTodoEditId: () => {},
});

const TodoContextProvider = ({ children }: { children: ReactNode }) => {
  const [todos, setTodos] = useState<Array<TodoType>>([]);
  const [allUsersTodos, setAllUsersTodos] = useState<object>([]);

  const [openModalTodo, setOpenModalTodo] = useState<boolean>(false);
  const [openModalEditTodo, setOpenModalEditTodo] = useState<boolean>(false);
  const [currentTodoEditId, setCurrentTodoEditId] = useState<number>(0);

  return (
    <TodoContext.Provider
      value={{
        todos,
        setTodos,
        openModalTodo,
        setOpenModalTodo,
        openModalEditTodo,
        setOpenModalEditTodo,
        currentTodoEditId,
        setCurrentTodoEditId,
        allUsersTodos, setAllUsersTodos
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
