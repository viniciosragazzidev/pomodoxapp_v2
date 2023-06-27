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

export type TodoContextType = {
  openModalPomodoro: boolean;
  setOpenModalPomodoro: Dispatch<SetStateAction<boolean>>;
};

export const PomodoroContext = createContext<TodoContextType>({
  openModalPomodoro: false,
  setOpenModalPomodoro: () => {},
});

const PomodoroContextProvider = ({ children }: { children: ReactNode }) => {
  const [openModalPomodoro, setOpenModalPomodoro] = useState(false);

  useEffect(() => {
    console.log(openModalPomodoro);
    
  },[openModalPomodoro])
  return (
    <PomodoroContext.Provider
      value={{
        openModalPomodoro,
        setOpenModalPomodoro,
      }}
    >
      {children}
    </PomodoroContext.Provider>
  );
};

export default PomodoroContextProvider;
