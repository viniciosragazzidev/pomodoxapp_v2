"use client";
import { useContext } from "react";
import { AppContext } from "../_context/AppContext";
import { Spinner } from "@phosphor-icons/react";

export default function Pomodox() {
  const { loggedByProfile, currentProfileLogged, logOutByProfile } =
    useContext(AppContext);

  return (
    <>
      {loggedByProfile ? (
        <div className="text-white">
          {loggedByProfile && currentProfileLogged ? (
            <span>
              {currentProfileLogged && currentProfileLogged[0].name}{" "}
              <span className="text-custom-purple font-bold">(Local)</span> /
              <span
                onClick={() => {
                  logOutByProfile();
                }}
                className="cursor-pointer hover:scale-75 transition-transform"
              >
                {" "}
                Logout
              </span>
            </span>
          ) : (
            ""
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
