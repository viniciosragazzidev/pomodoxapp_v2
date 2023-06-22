"use client";

import { BellRinging } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export const NavbarTop = () => {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <nav
      className={`w-full h-20  px-10 max-[480px]:px-5 max-[340px]:px-2 ${
        pathname === "/signup" || pathname === "/signin"
          ? "max-sm:justify-center"
          : "flex"
      } justify-between items-center bg-[#020106] flex `}
    >
      <h2
        onClick={() => {
          router.back();
        }}
        className="logo text-2xl max-[480px]:text-xl font-bold  flex gap-2 items-center cursor-pointer"
      >
        <BellRinging className="text-3xl max-[480px]:text-2xl" /> Pomodox
      </h2>
      <div
        className={`buttonsArea  items-center gap-6 text-sm ${
          pathname === "/signin" || pathname === "/signup" ? "hidden" : "flex"
        }`}
      >
        <Link href={"/signin"}>
          <button
            className="py-[10px] max-[480px]:py-2 border-custom-purple border w-36 max-[480px]:w-32  rounded-md cursor-pointer transition-all hover:scale-95"
            type="button"
          >
            Acessar Conta
          </button>
        </Link>
        <Link href={"/signup"}>
          <button
            className="py-[10px] bg-white w-36 text-gray-800 font-bold rounded-md cursor-pointer transition-all hover:scale-95 max-sm:hidden "
            type="button"
          >
            Cadastre-se
          </button>
        </Link>
      </div>
    </nav>
  );
};
