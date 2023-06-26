"use client";


import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
  useContext,
} from "react";

export type TodoType ={
    id: number,
    title: string,
    description: string,
    completed: boolean,
    date: string,
    priority: string,
    owner: string,
} 
export type TodoContextType = {
    todos: Array<TodoType>,
    setTodos:Dispatch<SetStateAction<TodoType[]>>,
};

export const TodoContext = createContext<TodoContextType>({
    todos: [],
    setTodos: () => {},
});


const TodoContextProvider = ({ children }: { children: ReactNode }) => {
    const [todos, setTodos] = useState<Array<TodoType>>([]);
  
    return (
      <TodoContext.Provider
        value={{
          todos,
          setTodos,
        }}
      >
        {children}
      </TodoContext.Provider>
    );
  };

  
  export default TodoContextProvider;