"use client";

import { useRouter } from "next/navigation";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";
import { NotificationComponent } from "../components/Notification/notificationComponent";

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

  deleteProfile: (id: string) => void;
  createProfile: (name: string, idade: string) => void;
  profiles: ProfileType[];
  setProfiles: Dispatch<SetStateAction<ProfileType[]>>;

  activateCustomNotification: (type: string, message: string) => void;
  customNotification: NotificationType[];
  setCustomNotification: Dispatch<SetStateAction<NotificationType[]>>;

  openNotification: boolean;
  setOpenNotification: Dispatch<SetStateAction<boolean>>;

  logInByProfile: (id: string) => void;
  logOutByProfile: () => void;
  loggedByProfile: boolean;
  setLoggedByProfile: Dispatch<SetStateAction<boolean>>;
  loadingLoginByProfile: boolean;
  setLoadingLoginByProfile: Dispatch<SetStateAction<boolean>>;
  currentProfileLogged: ProfileType[] | null;
  setCurrentProfileLogged: Dispatch<SetStateAction<ProfileType[]>>;
};

export const AppContext = createContext<AppContextType>({
  openAddNewProfile: false,
  setOpenAddNewProfile: () => {},

  createProfile: () => {},
  deleteProfile: () => {},

  profiles: [],
  setProfiles: () => {},

  activateCustomNotification: () => {},
  customNotification: [],
  setCustomNotification: () => {},

  openNotification: false,
  setOpenNotification: () => {},

  logInByProfile: () => {},
  logOutByProfile: () => {},

  loggedByProfile: false,
  setLoggedByProfile: () => {},
  loadingLoginByProfile: false,
  setLoadingLoginByProfile: () => {},

  currentProfileLogged: [],
  setCurrentProfileLogged: () => {},
});

const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [openAddNewProfile, setOpenAddNewProfile] = useState(false);
  const [profiles, setProfiles] = useState<ProfileType[]>([]);
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

  // Obtém perfis do localStorage
  const getProfilesInLocalStorage = () => {
    let profilesInLocalStorage = localStorage.getItem("profiles");
    if (profilesInLocalStorage) {
      let profilesArray = JSON.parse(profilesInLocalStorage);
      setProfiles(profilesArray);
      return profilesArray;
    }
    return [];
  };

  useEffect(() => {
    getProfilesInLocalStorage();
    isLoggedByProfileVerify();
  }, []);

  // Cria um novo perfil
  const createProfile = async (name: string, idade: string) => {
    let profilesInLocalStorage = getProfilesInLocalStorage();
    profilesInLocalStorage.push({
      id: Date.now() + "",
      name,
      idade,
    });

    localStorage.setItem("profiles", JSON.stringify(profilesInLocalStorage));
    setProfiles(profilesInLocalStorage);
    setOpenAddNewProfile(false);
  };

  // Deleta um perfil
  const deleteProfile = async (id: string) => {
    let confirm = window.confirm("Deseja realmente excluir?"); //
    if (confirm) {
      let profilesInLocalStorage = getProfilesInLocalStorage();
      profilesInLocalStorage.splice(
        profilesInLocalStorage.findIndex(
          (profile: ProfileType) => profile.id === id
        ),
        1
      );
      localStorage.setItem("profiles", JSON.stringify(profilesInLocalStorage));
    } else {
      return;
    }
  };

  const [loggedByProfile, setLoggedByProfile] = useState(false);
  const [currentProfileLogged, setCurrentProfileLogged] = useState<
    ProfileType[]
  >([]);
  // Encontra um perfil pelo ID
  const findProfileById = (id: string) => {
    let profilesInLocalStorage = getProfilesInLocalStorage();
    let profileById = profilesInLocalStorage.find(
      (profile: ProfileType) => profile.id === id
    );

    if (profileById) {
      return profileById;
    }
    return null;
  };

  const router = useRouter();

  const [loadingLoginByProfile, setLoadingLoginByProfile] = useState(false);

  // Faz login usando um perfil
  const logInByProfile = (id: string) => {
    let profilesInLocalStorage = getProfilesInLocalStorage();
    let profileById = findProfileById(id);
    localStorage.setItem("loggedByProfile", profileById?.id + "");
    isLoggedByProfileVerify();
  };

  // Faz login usando um perfil
  const logOutByProfile = () => {
    localStorage.removeItem("loggedByProfile");
    setLoggedByProfile(false);
    router.push("/");
    activateCustomNotification("success", "Deslogado com sucesso");
  };

  // Verifica se há um perfil logado
  const isLoggedByProfileVerify = () => {
    let loggedId = localStorage.getItem("loggedByProfile");

    if (loggedId) {
      let verifyIfValid = findProfileById(loggedId);

      if (verifyIfValid) {
        setLoggedByProfile(true);
        setCurrentProfileLogged([verifyIfValid]);
        console.log("valid", verifyIfValid);

        setLoadingLoginByProfile(true);
        setTimeout(() => {
          setLoggedByProfile(true);
          router.push("/pomodox");
          setLoadingLoginByProfile(false);
          activateCustomNotification("success", "Logado com sucesso");
        }, 2000);
      } else {
        alert("Error");
      }
    }
    setLoggedByProfile(false);
    console.log("err");
    router.push("/");

    return false;
  };

  return (
    <AppContext.Provider
      value={{
        openAddNewProfile,
        setOpenAddNewProfile,
        createProfile,
        profiles,
        setProfiles,
        activateCustomNotification,
        customNotification,
        setCustomNotification,
        openNotification,
        setOpenNotification,
        deleteProfile,
        logInByProfile,
        setLoggedByProfile,
        loggedByProfile,
        loadingLoginByProfile,
        setLoadingLoginByProfile,
        currentProfileLogged,
        setCurrentProfileLogged,
        logOutByProfile,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
