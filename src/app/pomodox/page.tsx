"use client";
import { useContext } from "react";
import { AppContext } from "../_context/AppContext";
import { Spinner } from "@phosphor-icons/react";
import { ProfileContext } from "../_context/ProfilesContext";
import TodoComponent from "../components/Todo/TodoComponent";
import PomodoroClock from "../components/PomodoroClock/PomodoroClock";

export default function Pomodox() {
  const { loggedByProfile, currentProfileLogged, logOutByProfile } =
    useContext(ProfileContext);
  // currentProfileLogged && currentProfileLogged[0].name
  return (
    <>
      {loggedByProfile ? (
        <div className="text-white">
          {currentProfileLogged && (
            <main className="w-full h-full flex justify-center flex-col items-center px-10 max-[480px]:px-7 ">
              <div className="container grid grid-cols-2 max-md:grid-cols-1 max-md:gap-11 ">
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
