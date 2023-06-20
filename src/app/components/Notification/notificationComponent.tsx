"use client";
import { AppContext } from "@/app/_context/AppContext";
import { BellRinging, CheckFat, Warning } from "@phosphor-icons/react";
import { useContext } from "react";
import styled from "styled-components";

export const NotificationBox = styled.div`
  width: 240px;
  height: 100px;
  background-color: #020106;
  position: fixed;
  top: 10px;
  right: -400px;
  border: 1px solid #fff2;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease-in-out;
  &.show {
    transform: translateX(-440px);
  }
`;

export const NotificationComponent = () => {
  const { customNotification, openNotification } = useContext(AppContext);

  return (
    <NotificationBox
      className={`flex flex-col justify-center items-center text-center gap-2 ${openNotification ? "show" : null}`}
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
    </NotificationBox>
  );
};
