"use client";
import { profile } from "console";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";

export type ProfileType = {
  id: number;
  name: string;
  idade: string;
};

export type AppContextType = {
  openAddNewProfile: boolean;
  setOpenAddNewProfile: Dispatch<SetStateAction<boolean>>;
  createProfile: (name: string, idade: string) => void; // Adicione a função createProfile ao tipo AppContextType
  profiles: ProfileType[]; // Atualize o tipo para ProfileType[]
  setProfiles: Dispatch<SetStateAction<ProfileType[]>>; // Atualize o tipo para Dispatch<SetStateAction<ProfileType[]>>profiles: ProfileType[]; // Atualize o tipo para ProfileType[]  setProfiles: Dispatch<SetStateAction<ProfileType[]>>; // Atualize o tipo para Dispatch<SetStateAction<ProfileType[]>>

};

export const AppContext = createContext<AppContextType>({
  openAddNewProfile: false,
  setOpenAddNewProfile: () => {},
  createProfile: () => {}, // Defina uma implementação vazia para createProfile
  profiles: [ ],
  setProfiles: () => {},
});

const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [openAddNewProfile, setOpenAddNewProfile] = useState(false);
  const [profiles, setProfiles] = useState<ProfileType[]>([]);

  const getProfilesInLocalstorage = () => {
    let profilesInLocalstorage = localStorage.getItem("profiles");
    if (profilesInLocalstorage) {
      let profilesA = JSON.parse(profilesInLocalstorage);
      setProfiles(profilesA);
      return profilesA;
    }
    return [];
  };


  useEffect(() => {
    getProfilesInLocalstorage();
  }, []);

  const createProfile = async (name: string, idade: string) => {
    let profilesInLocalstorage = getProfilesInLocalstorage();
    profilesInLocalstorage.push({
      id: Date.now(),
      name,
      idade,
    });
    
    localStorage.setItem("profiles", JSON.stringify(profilesInLocalstorage));
    setProfiles(profilesInLocalstorage);
    setOpenAddNewProfile(false);
  };
  return (
    <AppContext.Provider
      value={{ openAddNewProfile, setOpenAddNewProfile, createProfile, profiles, setProfiles }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
