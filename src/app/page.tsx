"use client";

import { useContext } from "react";
import { AddPerfilArea } from "./components/Perfis/AddPerfilArea";
import { PerfisArea } from "./components/Perfis/PerfisArea";
import { AppContext } from "./context/AppContext";
import { NotificationComponent } from "./components/Notification/notificationComponent";

export default function Home() {
  const { openAddNewProfile, setOpenAddNewProfile } = useContext(AppContext);

  return (
    <main className="flex min-h-[80vh] justify-center flex-col items-center px-10 max-[480px]:px-7 text-white text-center mt-5">
      
      <div className="container-top grid grid-cols-2 max-[865px]:grid-cols-1 gap-16 justify-between py-14  ">
        <section className=" flex flex-col gap-3 text-start w-full h-full justify-start items-start">
          <div className="text grid gap-5">
            <h1 className="text-4xl max-sm:text-3xl tracking-wide font-bold ">
              Impusione sua produtividade com o método pomodoro
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt sint
              repudiandae quia temporibus corrupti debitis.
            </p>
          </div>

          <div className="wrap w-16 h-[2px] bg-indigo-800 my-10"></div>

          <div className="stats flex gap-5">
            <div className="stat-box grid gap-3 px-1">
              <h3 className="number text-4xl font-bold">10</h3>
              <p className="text-sm font-light">
                Pessoa focadas nesse momento{" "}
                <span className="text-xs text-indigo-700 animate-ping">◉</span>
              </p>
            </div>
            <div className="stat-box grid gap-3 px-1">
              <h3 className="number text-4xl font-bold">64</h3>
              <span className="text-sm font-light">
                Pessoa focadas nas ultimas 24h
              </span>
            </div>
            <div className="stat-box grid gap-3 px-1">
              <h3 className="number text-4xl font-bold">120</h3>
              <span className="text-sm font-light">
                Pessoa focadas na ultima semana
              </span>
            </div>
          </div>
        </section>
        <section className="flex flex-col w-full h-full justify-center text-center items-center gap-10 ">
          <h4 className="text-lg font-bold">
            Selecione o perfil abaixo que deseja iniciar.
          </h4>
          {openAddNewProfile ? <AddPerfilArea /> : <PerfisArea />}
        </section>
      </div>
    </main>
  );
}
