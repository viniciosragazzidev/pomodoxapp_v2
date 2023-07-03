'use client'
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
  valueFocusTimer: number;
  setValueFocusTimer: Dispatch<SetStateAction<number>>;
  valueShortTimer: number;
  setValueShortTimer: Dispatch<SetStateAction<number>>;
  valueLongTimer: number;
  setValueLongTimer: Dispatch<SetStateAction<number>>;
};

export const PomodoroContext = createContext<TodoContextType>({
  openModalPomodoro: false,
  setOpenModalPomodoro: () => {},
  valueFocusTimer: 10,
  setValueFocusTimer: () => {},
  valueShortTimer: 5,
  setValueShortTimer: () => {},
  valueLongTimer: 15,
  setValueLongTimer: () => {},
});

const PomodoroContextProvider = ({ children }: { children: ReactNode }) => {
  const [openModalPomodoro, setOpenModalPomodoro] = useState(false);
  const [valueFocusTimer, setValueFocusTimer] = useState(10);
  const [valueShortTimer, setValueShortTimer] = useState(5);
  const [valueLongTimer, setValueLongTimer] = useState(15);

  useEffect(() => {
    // Coloque o código que deseja executar aqui
  }, [openModalPomodoro]);

  return (
    <PomodoroContext.Provider
      value={{
        openModalPomodoro,
        setOpenModalPomodoro,
        valueFocusTimer,
        setValueFocusTimer,
        valueShortTimer,
        setValueShortTimer,
        valueLongTimer,
        setValueLongTimer,
      }}
    >
      {children}
    </PomodoroContext.Provider>
  );
};

export default PomodoroContextProvider;
