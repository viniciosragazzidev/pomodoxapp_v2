"use client";

import Image from "next/image";
import Avatar from "../../_media/avatar.jpg";
import Avatar2 from "../../_media/avatar2.jpg";
import { Spinner, Trash, UserCirclePlus } from "@phosphor-icons/react";
import { useContext, useEffect, useState } from "react";
import { AppContext, ProfileType } from "@/app/_context/AppContext";
export const PerfisArea = () => {
  const {
    openAddNewProfile,
    setOpenAddNewProfile,
    profiles,
    deleteProfile,
    logInByProfile,
    loadingLoginByProfile,
    currentProfileLogged,
  } = useContext(AppContext);

  const [currentProfileLoggedId, setCurrentProfileLoggedId] =
    useState<ProfileType>();
  useEffect(() => {
    if (currentProfileLogged?.[0]) {
      setCurrentProfileLoggedId(currentProfileLogged?.[0]);
    }
  }, [currentProfileLogged]);

  return (
    <div className="perfis w-full  flex flex-col gap-5 justify-center items-center perfisArea">
      {loadingLoginByProfile ? (
        <span>
          <Spinner
            className="animate-spin-slow "
            size={36}
            color="#f7f7f7"
            weight="bold"
          />
        </span>
      ) : profiles.length > 0 ? (
        profiles.map((profile, index) => (
          <div
            className=" flex items-center gap-2 group select-none"
            key={profile.id}
          >
            <div
              onClick={() => {
                logInByProfile(profile.id);
              }}
              className={`perfil-box  w-[220px] h-14 rounded-md text-start  flex gap-5 text-sm group-hover:translate-x-[-30px] duration-100  px-3 hover:scale-95 
              transition-transform items-center py-2 cursor-pointer ${
                currentProfileLoggedId?.id === profile.id &&
                "bg-[#100023] border-b-2 border-custom-purple"
              } bg-[#060612] hover:bg-dark`}
            >
              <div className="logo w-10 h-10 rounded-full bg-black border-white border overflow-hidden">
                <Image src={Avatar} alt="Logo" />
              </div>
              <span
                className={` text-white flex items-center  ${
                  currentProfileLoggedId?.id === profile.id &&
                  "font-bold "
                }`}
              >
                {profile.name}
              </span>
            </div>
            <span
              onClick={() => {
                deleteProfile(profile.id);
              }}
              className="cursor-pointer hover:scale-95 transition-all absolute opacity-0 -z-50 group-hover:opacity-100 group-hover:relative group-hover:z-10 duration-100 "
            >
              <Trash size={24} weight="fill" />
            </span>
          </div>
        ))
      ) : (
        <div>
          <span>Nenhum perfil encontrado</span>
        </div>
      )}

      <span
        onClick={() => {
          setOpenAddNewProfile(!openAddNewProfile);
        }}
        className="text-sm  mt-5 text-gray-400 hover:scale-95 transition-transform cursor-pointer flex items-center gap-2"
      >
        <UserCirclePlus size={26} weight="fill" /> Adicionar novo perfil
      </span>
    </div>
  );
};
