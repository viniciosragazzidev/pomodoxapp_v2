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
export type NotificationType = {
  type: string;
  message: string;
};
export type AppContextType = {
  openAddNewProfile: boolean;
  setOpenAddNewProfile: Dispatch<SetStateAction<boolean>>;

  deleteProfile: (id: number) => void;
  createProfile: (name: string, idade: string) => void;
  profiles: ProfileType[];
  setProfiles: Dispatch<SetStateAction<ProfileType[]>>;

  activateCustomNotifiication: (type: string, message: string) => void;
  customNotification: NotificationType[];
  setCustomNotification: Dispatch<SetStateAction<NotificationType[]>>;

  openNotification: boolean;
  setOpenNotification: Dispatch<SetStateAction<boolean>>;
};

export const AppContext = createContext<AppContextType>({
  openAddNewProfile: false,
  setOpenAddNewProfile: () => {},

  createProfile: () => {},
  deleteProfile: () => {},

  profiles: [],
  setProfiles: () => {},

  activateCustomNotifiication: () => {},
  customNotification: [],
  setCustomNotification: () => {},

  openNotification: false,
  setOpenNotification: () => {},
});

const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [openAddNewProfile, setOpenAddNewProfile] = useState(false);
  const [profiles, setProfiles] = useState<ProfileType[]>([]);
  const [openNotification, setOpenNotification] = useState(false);

  const [customNotification, setCustomNotification] = useState<
    NotificationType[]
  >([{ type: "", message: "" }]);

  const activateCustomNotifiication = (type: string, message: string) => {
    setCustomNotification([{ type, message }]);
    setOpenNotification(true);

    setTimeout(() => {
      setOpenNotification(false);
    }, 4000);
  };

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

  const deleteProfile = async (id: number) => {
    let confirm = window.confirm('Deseja excluir realmente?'); //
    if(confirm){
      let profilesInLocalstorage = getProfilesInLocalstorage();
      let deleteProfileById = profilesInLocalstorage.splice(
        profilesInLocalstorage.findIndex(
          (profile: ProfileType) => profile.id === id
        ),
        1
      );
      localStorage.setItem("profiles", JSON.stringify(profilesInLocalstorage));
    }else{
      return;
    }
  };
  return (
    <AppContext.Provider
      value={{
        openAddNewProfile,
        setOpenAddNewProfile,
        createProfile,
        profiles,
        setProfiles,
        activateCustomNotifiication,
        customNotification,
        setCustomNotification,
        openNotification,
        setOpenNotification,
        deleteProfile,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
