"use client";

import {
  Dispatch,
  FocusEvent,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

export type ProfileType = {
  id: string;
  name: string;
  idade: string;
};

export type NotificationType = {
  type: string;
  message: string;
};

export type AppContextType = {
  openAddNewProfile: boolean;
  setOpenAddNewProfile: Dispatch<SetStateAction<boolean>>;

  activateCustomNotification: (type: string, message: string) => void;
  customNotification: NotificationType[];
  setCustomNotification: Dispatch<SetStateAction<NotificationType[]>>;

  handleFocusEvent: (e: FocusEvent<HTMLInputElement>) => void;
  handleBlurEvent: () => void;

  currentFocus: string;
  setCurrentFocus: Dispatch<SetStateAction<string>>;
  openNotification: boolean;
  setOpenNotification: Dispatch<SetStateAction<boolean>>;
};

export const AppContext = createContext<AppContextType>({
  openAddNewProfile: false,
  setOpenAddNewProfile: () => {},

  activateCustomNotification: () => {},
  customNotification: [],
  setCustomNotification: () => {},

  currentFocus: "",
  setCurrentFocus: () => {},
  handleFocusEvent: (e: FocusEvent<HTMLInputElement>) => {},
  handleBlurEvent: () => {},

  openNotification: false,
  setOpenNotification: () => {},
});

const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [openAddNewProfile, setOpenAddNewProfile] = useState(false);
  const [openNotification, setOpenNotification] = useState(false);

  const [customNotification, setCustomNotification] = useState<
    NotificationType[]
  >([{ type: "", message: "" }]);

  // Ativa uma notificação customizada
  const activateCustomNotification = (type: string, message: string) => {
    setCustomNotification([{ type, message }]);
    setOpenNotification(true);

    setTimeout(() => {
      setOpenNotification(false);
    }, 4000);
  };

  const [currentFocus, setCurrentFocus] = useState("");

  const handleFocusEvent = (e: FocusEvent<HTMLInputElement>) => {
    setCurrentFocus(e.target.id);
  };
  const handleBlurEvent = () => {
    setCurrentFocus("");
  };
  const contextValue = {
    openAddNewProfile,
    setOpenAddNewProfile,

    activateCustomNotification,
    customNotification,
    setCustomNotification,
    openNotification,
    setOpenNotification,

    handleFocusEvent,
    currentFocus,
    setCurrentFocus,
    handleBlurEvent
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export default AppContextProvider;
