"use client";

import Image from "next/image";
import Avatar from "../../media/avatar.jpg";
import Avatar2 from "../../media/avatar2.jpg";
import { UserCirclePlus } from "@phosphor-icons/react";
import { useContext } from "react";
import { AppContext } from "@/app/context/AppContext";
export const PerfisArea = () => {
  const { openAddNewProfile, setOpenAddNewProfile, profiles } =
    useContext(AppContext);

  return (
    <div className="perfis w-full  flex flex-col gap-5 justify-center items-center perfisArea">
      {profiles.length > 0 ?
        profiles.map((profile, index) => (
          <div
            className="perfil-box  w-[220px] h-14 rounded-md text-start  flex gap-5 text-sm  px-3 hover:scale-95 
        transition-transform items-center py-2 cursor-pointer bg-[#060612] hover:bg-dark"
          >
            <div className="logo w-10 h-10 rounded-full bg-black border-white border overflow-hidden">
              <Image src={Avatar2} alt="Logo" />
            </div>
            <span className="font-bold text-white">{profile.name}</span>
          </div>
        )): (
        <div>
          <span>Nenhum perfil encontrado</span>
        </div>)}

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
