"use client";

import { useContext, useEffect, useState } from "react";
import { AddPerfilArea } from "./components/Perfis/AddPerfilArea";
import { PerfisArea } from "./components/Perfis/PerfisArea";
import { AppContext } from "./_context/AppContext";
import { useRouter } from "next/navigation";
import { NotificationComponent } from "./components/Notification/notificationComponent";
import {
  useMotionValue,
  motion,
  useTransform,
  animate,
  AnimatePresence,
} from "framer-motion";

export default function Home({}) {
  const { openAddNewProfile, setOpenAddNewProfile } = useContext(AppContext);

  const count1 = useMotionValue(0);
  const count2 = useMotionValue(0);
  const count3 = useMotionValue(0);

  const usersOnLive = useTransform(count1, (latest) => Math.round(latest));
  const usersOnDay = useTransform(count2, (latest) => Math.round(latest));
  const usersOnWeek = useTransform(count3, (latest) => Math.round(latest));

  // useEffect with async

  useEffect(() => {
    setTimeout(() => {
      setTimeout(() => {
        const controls1 = animate(count1, 54);
        return () => {
          controls1.stop();
        };
      }, 500);
      setTimeout(() => {
        const controls2 = animate(count2, 136);
        return () => {
          controls2.stop();
        };
      }, 700);
      setTimeout(() => {
        const controls3 = animate(count3, 450);
        return () => {
          controls3.stop();
        };
      }, 900);
    }, 1000);
    
  }, []);

  return (
    <main className="flex min-h-[80vh] justify-center flex-col items-center px-10 max-[480px]:px-7 text-white text-center mt-5">
      <div className="container-top grid grid-cols-2 max-[865px]:grid-cols-1 gap-16 justify-between py-14  ">
        <section className=" flex flex-col gap-3 text-start w-full h-full justify-start items-start">
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.9 }}
            className="text grid gap-5"
          >
            <h1 className="text-4xl max-sm:text-3xl tracking-wide font-bold ">
              Impusione sua produtividade com o <span className="text-custom-purple">método pomodoro</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt sint
              repudiandae quia temporibus corrupti debitis.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.9 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                delay: 0.5,
                duration: 0.25,
              },
            }}
            exit={{ opacity: 0, y: -50, scale: 0.9 }}
            className="wrap w-16 h-[2px] bg-indigo-800 my-10 max-[460px]:my-5"
          ></motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.9 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                delay: 0.5,
                duration: 0.25,
              },
            }}
            exit={{ opacity: 0, y: -50, scale: 0.9 }}
            className="text grid gap-5"
          >
            <div className="stats flex gap-5 max-[460px]:hidden">
              <div className="stat-box grid gap-3 px-1">
                <h3 className="number text-4xl font-bold">
                  {" "}
                  <motion.div>{usersOnLive}</motion.div>
                </h3>
                <p className="text-sm font-light">
                  Pessoa focadas nesse momento{" "}
                  <span className="text-xs text-indigo-700 animate-ping">
                    ◉
                  </span>
                </p>
              </div>
              <div className="stat-box grid gap-3 px-1">
                <h3 className="number text-4xl font-bold">
                  {" "}
                  <motion.div>{usersOnDay}</motion.div>
                </h3>
                <span className="text-sm font-light">
                  Pessoa focadas nas ultimas 24h
                </span>
              </div>
              <div className="stat-box grid gap-3 px-1">
                <h3 className="number text-4xl font-bold">
                  <motion.div>{usersOnWeek}</motion.div>
                </h3>
                <span className="text-sm font-light">
                  Pessoa focadas na ultima semana
                </span>
              </div>
            </div>
          </motion.div>
        </section>

        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
              delay: 0.7,
              duration: 0.25,
            },
          }}
          exit={{ opacity: 0, y: -50, scale: 0.9 }}
          className="text grid gap-5"
        >
          <section className="flex flex-col w-full h-full justify-center text-center items-center gap-10 ">
            <h4 className="text-lg font-bold">
              Selecione o perfil local abaixo que deseja iniciar.
            </h4>
            {openAddNewProfile ? <AddPerfilArea /> : <PerfisArea />}
          </section>
        </motion.div>
      </div>
    </main>
  );
}
