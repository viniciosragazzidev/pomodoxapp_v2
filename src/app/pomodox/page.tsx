"use client";
import { useContext } from "react";
import { Spinner } from "@phosphor-icons/react";
import { ProfileContext } from "../_context/ProfilesContext";
import TodoComponent from "../components/Todo/TodoComponent";
import PomodoroClock from "../components/PomodoroClock/PomodoroClock";
import ModalPomodoroClock from "../components/PomodoroClock/ModalPomodoroClock";
import TodoModalComponent from "../components/Todo/TodoModal";

export default function Pomodox() {
  const { loggedByProfile, currentProfileLogged, logOutByProfile } =
    useContext(ProfileContext);
  return (
    <>
    <ModalPomodoroClock/> 
    <TodoModalComponent/> 
      {loggedByProfile ? (
        <div className="text-white">
          {currentProfileLogged && (
            <main className="w-full h-full flex justify-center flex-col items-center px-10 max-[480px]:px-7 max-lg:py-10  max-sm:py-0 max-sm:pb-10">
              <div className="container grid grid-cols-2 max-lg:grid-cols-1 max-lg:gap-11 ">
                <div className="pomodoxClock w-full h-full flex justify-center items-center">
                  <PomodoroClock  />
                </div>
                <div className="todo w-full">
                  <TodoComponent />
                </div>
              </div>
            </main>
          )}
        </div>
      ) : (
        <div className="w-full h-[80vh] flex justify-center items-center">
          <Spinner
            className="animate-spin-slow "
            size={36}
            color="#f7f7f7"
            weight="bold"
          />
        </div>
      )}
    </>
  );
}
