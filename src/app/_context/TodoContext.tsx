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
  completed: boolean;
  date: string;
  priority: string;
  owner: string;
};
export type TodoContextType = {
  todos: Array<TodoType>;
  setTodos: Dispatch<SetStateAction<TodoType[]>>;
  openModalTodo: boolean;
  setOpenModalTodo: Dispatch<SetStateAction<boolean>>;
};

export const TodoContext = createContext<TodoContextType>({
  todos: [],
  setTodos: () => {},
  openModalTodo: false,
  setOpenModalTodo: () => {},
});

const TodoContextProvider = ({ children }: { children: ReactNode }) => {


  const [todos, setTodos] = useState<Array<TodoType>>([]);
  const [openModalTodo, setOpenModalTodo] = useState<boolean>(false);

  return (
    <TodoContext.Provider
      value={{
        todos,
        setTodos,
        openModalTodo,
        setOpenModalTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
