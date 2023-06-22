"use client";

import { useRouter } from "next/navigation";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
  useContext,
} from "react";
import { AppContext } from "./AppContext";

export type ProfileType = {
  id: string;
  name: string;
  idade: string;
};

export type ProfileContextType = {
  deleteProfile: (id: string) => void;
  createProfile: (name: string, idade: string) => void;
  profiles: ProfileType[];
  setProfiles: Dispatch<SetStateAction<ProfileType[]>>;

  logInByProfile: (id: string) => void;
  logOutByProfile: () => void;
  loggedByProfile: boolean;
  setLoggedByProfile: Dispatch<SetStateAction<boolean>>;
  loadingLoginByProfile: boolean;
  setLoadingLoginByProfile: Dispatch<SetStateAction<boolean>>;
  currentProfileLogged: ProfileType[] | null;
  setCurrentProfileLogged: Dispatch<SetStateAction<ProfileType[]>>;
};

export const ProfileContext = createContext<ProfileContextType>({
  createProfile: () => {},
  deleteProfile: () => {},

  profiles: [],
  setProfiles: () => {},

  logInByProfile: () => {},
  logOutByProfile: () => {},

  loggedByProfile: false,
  setLoggedByProfile: () => {},
  loadingLoginByProfile: false,
  setLoadingLoginByProfile: () => {},

  currentProfileLogged: [],
  setCurrentProfileLogged: () => {},
});

const ProfileContextProvider = ({ children }: { children: ReactNode }) => {
  const [profiles, setProfiles] = useState<ProfileType[]>([]);
  const { setOpenAddNewProfile, activateCustomNotification } =
    useContext(AppContext);
  // Obtém perfis do localStorage
  const getProfilesInLocalStorage = () => {
    let profilesInLocalStorage = localStorage.getItem("profiles");
    if (profilesInLocalStorage) {
      let profilesArray = JSON.parse(profilesInLocalStorage);
      setProfiles(profilesArray);
      console.log("Load");

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
      setCurrentProfileLogged(profileById);
      return profileById;
    }
    return null;
  };

  const router = useRouter();

  const [loadingLoginByProfile, setLoadingLoginByProfile] = useState(false);

  // Faz login usando um perfil
  const logInByProfile = async (id: string) => {
    let profileById = await findProfileById(id);
    localStorage.setItem("loggedByProfile", profileById?.id + "");
    isLoggedByProfileVerify()
      .then(() => {
        router.push("/pomodox");
        activateCustomNotification("success", "Logado com sucesso");
      })
      .catch((error) => {
        // Ações a serem executadas em caso de erro na promessa
        console.error("Erro na promessa:", error);
      });
  };

  // Faz logout usando um perfil
  const logOutByProfile = () => {
    localStorage.removeItem("loggedByProfile");
    setLoggedByProfile(false);
    setCurrentProfileLogged([]);
    router.push("/");
    activateCustomNotification("success", "Deslogado com sucesso");
  };

  // Verifica se há um perfil logado
  const isLoggedByProfileVerify = (): Promise<void> => {
    let loggedId = localStorage.getItem("loggedByProfile");

    if (loggedId) {
      let verifyIfValid = findProfileById(loggedId);

      if (verifyIfValid) {
        setLoggedByProfile(true);
        setCurrentProfileLogged([verifyIfValid]);
        setLoadingLoginByProfile(true);

        // Criar uma promessa
        let promise = new Promise<void>((resolve, reject) => {
          setTimeout(() => {
            setLoggedByProfile(true);
            setLoadingLoginByProfile(false);

            resolve(); // Resolver a promessa após o tempo determinado
          }, 2000);
        });

        return promise;
      } else {
        alert("Error");
      }
    }

    setLoggedByProfile(false);
    console.log("err");
    router.push("/");

    return Promise.reject(); // Rejeitar a promessa sem fornecer um valor
  };

  return (
    <ProfileContext.Provider
      value={{
        createProfile,
        profiles,
        setProfiles,

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
    </ProfileContext.Provider>
  );
};

export default ProfileContextProvider;
