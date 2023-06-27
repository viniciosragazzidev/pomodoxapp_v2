"use client";
import { Envelope, EyeSlash, GoogleLogo, LockKey } from "@phosphor-icons/react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FocusEvent, FocusEventHandler, useContext, useState } from "react";
import { AppContext } from "../_context/AppContext";
export default function Signin() {
  const { handleFocusEvent, currentFocus, handleBlurEvent } =
    useContext(AppContext);
  return (
    <div className="w-full min-h-[75vh] px-10 max-[480px]:px-7 flex justify-center items-center ">
      <div className="container w-full h-full grid grid-cols-2 max-sm:grid-cols-1 max-sm:gap-10 max-sm:py-10">
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
              duration: 0.25,
            },
          }}
          exit={{ opacity: 0, y: -50, scale: 0.9 }}
          className="content w-full flex justify-center items-center"
        >
          {/* Description for form with titles and description */}
          <div className="text flex justify-center flex-col gap-3 max-w-md">
            <h1 className="text-4xl font-bold">Faça login na plataforma</h1>
            <p>
              Aumente sua produtividade ao máximo e complete suas tarefas da
              forma mais eficiente possivel.
            </p>
          </div>
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
          className="form w-full flex flex-col  gap-4 justify-center items-center"
        >
          <form className="flex flex-col w-full max-w-sm gap-5">
            <div className="form-group flex flex-col  gap-2 ">
              <div
                className={`input-area flex w-full relative h-12 overflow-hidden  items-center gap-3 border  rounded-md ${
                  currentFocus === "email"
                    ? "border-custom-purple"
                    : "border-slate-700"
                }`}
              >
                <span
                  className={`absolute left-2 z-40  ${
                    currentFocus === "email"
                      ? "text-custom-purple"
                      : " text-slate-700"
                  }`}
                >
                  <Envelope size={20} weight="fill" />
                </span>
                <input
                  type="email"
                  className="form-control w-full h-full bg-transparent  px-10 absolute focus:border-none focus:outline-none caret-transparent "
                  id="email"
                  placeholder="Seu E-mail"
                  autoComplete="off"
                  onFocus={handleFocusEvent}
                  onBlur={handleBlurEvent}
                />
              </div>
            </div>
            <div className="form-group flex flex-col  gap-2 ">
              <div
                className={`input-area flex w-full relative h-12 overflow-hidden  items-center gap-3 border  rounded-md ${
                  currentFocus === "password"
                    ? "border-custom-purple"
                    : "border-slate-700"
                }`}
              >
                <span
                  className={`absolute left-2 z-40  ${
                    currentFocus === "password"
                      ? "text-custom-purple"
                      : " text-slate-700"
                  }`}
                >
                  <LockKey size={20} weight="fill" />
                </span>
                <input
                  type="password"
                  className="form-control w-full h-full bg-transparent px-10 absolute focus:border-none focus:outline-none caret-transparent "
                  id="password"
                  placeholder="Sua senha"
                  autoComplete="off"
                  onFocus={handleFocusEvent}
                  onBlur={handleBlurEvent}
                />
                <span
                  className={`absolute  right-2 cursor-pointer  ${
                    currentFocus === "password"
                      ? "text-custom-purple"
                      : " text-slate-700"
                  }`}
                ></span>{" "}
                <span className="absolute right-2 cursor-pointer">
                  <EyeSlash size={20} color={"#6773e7"} weight="fill" />
                </span>
              </div>
            </div>
            <span className="recoverPass text-custom-purple cursor-pointer hover:scale-95 transition-all  text-sm ">
              Esqueci minha senha
            </span>

            <button className="w-full h-12 bg-custom-purple rounded-md uppercase font-bold hover:scale-[0.98] hover:bg-custom-purple-hover transition-all">
              Entrar
            </button>
          </form>
          <div className="w-full max-w-sm grid gap-4">
            <span className="text-center text-sm">
              Não tem uma conta?{" "}
              <Link
                href={"/signup"}
                className="text-custom-purple hover:scale-95 transition-all hover:bg-custom-purple-hover"
              >
                Registre-se
              </Link>
            </span>

            <div className="loginBy flex items-center w-full justify-around px-4 gap-4 py-5">
              <span>Ou entre com</span>
              <span className="px-6 py-2 rounded-md bg-custom-purple-hover flex items-center gap-2 cursor-pointer hover:scale-95 transition-all">
                <GoogleLogo size={24} color="#f7f7f7" weight="fill" /> Google
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
