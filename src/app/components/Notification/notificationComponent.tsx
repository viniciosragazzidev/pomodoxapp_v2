"use client";
import { AppContext } from "@/app/_context/AppContext";
import { BellRinging, CheckFat, Warning } from "@phosphor-icons/react";
import { useContext } from "react";

export const NotificationComponent = () => {
  const { customNotification, openNotification } = useContext(AppContext);

  return (
    <div
      className={` notificationBox flex flex-col justify-center items-center text-center gap-2 ${
        openNotification ? "show" : null
      }`}
    >
      {customNotification[0].type === "error" ? (
        <span>
          <Warning size={24} weight="fill" />
        </span>
      ) : customNotification[0].type === "success" ? (
        <span>
          <CheckFat size={24} weight="fill" />
        </span>
      ) : customNotification[0].type === "notification" ? (
        <span>
          <BellRinging size={24} weight="fill" />
        </span>
      ) : null}

      <span className="text-sm font-bold text-center">
        {customNotification[0].message}
      </span>
    </div>
  );
};
