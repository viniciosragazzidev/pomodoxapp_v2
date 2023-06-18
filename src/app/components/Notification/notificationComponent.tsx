"use client";
import { Warning } from "@phosphor-icons/react";
import styled from "styled-components";

export const NotificationBox = styled.div`
  width: 240px;
  height: 100px;
  background-color: #020106;
  position: fixed;
  top: 10px;
  right: 40px;
  border: 1px solid #fff2;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NotificationComponent = () => {
  return (
    <NotificationBox className="flex flex-col gap-2">
      <span>
        <Warning size={24} weight="fill" />
      </span>
      <span className="text-sm font-bold">Alguns dados estão faltando</span>
    </NotificationBox>
  );
};
