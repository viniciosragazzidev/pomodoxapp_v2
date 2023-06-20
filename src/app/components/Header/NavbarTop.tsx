"use client";
import { AppContext } from "@/app/_context/AppContext";
import { BellRinging } from "@phosphor-icons/react";
import { useContext } from "react";

export const NavbarTop = () => {
  const { loggedByProfile, currentProfileLogged } = useContext(AppContext);

  return (
    <nav className="w-full h-20 px-10 max-[480px]:px-5 max-[340px]:px-2 flex justify-between items-center bg-[#020106]">
      <span className="logo text-2xl max-[480px]:text-xl font-bold  flex gap-2 items-center">
        <BellRinging className="text-3xl max-[480px]:text-2xl" /> Pomodox
      </span>

      <div className="buttonsArea flex items-center gap-6 text-sm ">
        

        <button
          className="py-[10px] max-[480px]:py-2 border-white border w-36 max-[480px]:w-32  rounded-md cursor-pointer transition-all hover:scale-95"
          type="button"
        >
          Acessar Conta
        </button>
        <button
          className="py-[10px] bg-white w-36 text-gray-800 font-bold rounded-md cursor-pointer transition-all hover:scale-95 max-sm:hidden "
          type="button"
        >
          Cadastre-se
        </button>
      </div>
    </nav>
  );
};
