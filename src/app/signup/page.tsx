"use client";
import {
  Envelope,
  EyeSlash,
  GoogleLogo,
  IdentificationBadge,
  LockKey,
  User,
} from "@phosphor-icons/react";
import Link from "next/link";
import { motion } from "framer-motion";
export default function Signup() {
  return (
    <div className="w-full min-h-[75vh] px-10 max-[480px]:px-7 flex justify-center items-center ">
      <div className="container w-full h-full grid grid-cols-2 max-sm:grid-cols-1 max-sm:gap-10 max-sm:py-10">
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -50, scale: 0.9 }}
          className="content w-full flex justify-center items-center"
        >
          {/* Description for form with titles and description */}
          <div className="text flex justify-center flex-col gap-3 max-w-md">
            <h1 className="text-4xl font-bold">
              Crie uma conta e junte-se a nós
            </h1>
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
            <div className="form-group flex   gap-2 ">
              <div className="input-area flex w-full h-12 px-2 items-center gap-3 border border-slate-700 rounded-md ">
                <IdentificationBadge
                  size={20}
                  color={"#6773e7"}
                  weight="fill"
                />
                <input
                  type="text"
                  className="form-control w-full h-full bg-transparent px-2 focus:border-none focus:outline-none caret-transparent"
                  id="name"
                  placeholder="Nome"
                  autoComplete="false"
                />
              </div>
              <div className="input-area flex w-full h-12 px-2 items-center gap-3 border border-slate-700 rounded-md ">
                <User size={20} color={"#6773e7"} weight="fill" />
                <input
                  type="text"
                  className="form-control w-full h-full bg-transparent px-2 focus:border-none focus:outline-none caret-transparent"
                  id="surname"
                  placeholder="Sobrenome"
                  autoComplete="false"
                />
              </div>
            </div>
            <div className="form-group flex flex-col  gap-2 ">
              <div className="input-area flex w-full h-12 px-2 items-center gap-3 border border-slate-700 rounded-md ">
                <Envelope size={20} color={"#6773e7"} weight="fill" />
                <input
                  type="email"
                  className="form-control w-full h-full bg-transparent px-2 focus:border-none focus:outline-none caret-transparent"
                  id="email"
                  placeholder="Email"
                  autoComplete="false"
                />
              </div>
            </div>
            <div className="form-group flex flex-col  gap-2 ">
              <div className="input-area flex w-full h-12 px-2 items-center gap-3 border border-slate-700 rounded-md ">
                <LockKey size={20} color={"#6773e7"} weight="fill" />

                <input
                  type="password"
                  className="form-control w-full h-full bg-transparent px-2 focus:border-none focus:outline-none caret-transparent"
                  id="password"
                  placeholder="Password"
                  autoComplete="false"
                />
                <EyeSlash size={20} color={"#6773e7"} weight="fill" />
              </div>
            </div>
            <div className="form-group flex   gap-2 ">
              <div className="input-area flex  items-center justify-center w-full h-12 px-2  gap-3 border border-slate-700 rounded-md ">
                <div className="inputs-flex flex items-center gap-2">
                  <div className="input flex  gap-2">
                    <span className="text-slate-400">Mas</span>
                    <input
                      className=" accent-custom-purple"
                      type="radio"
                      name="gen"
                      id="mas"
                      checked
                    />
                  </div>
                  <div className="input flex gap-2">
                    <span className="text-slate-400">Fem</span>
                    <input
                      className=" accent-custom-purple"
                      type="radio"
                      name="gen"
                      id="fem"
                    />
                  </div>
                </div>
              </div>
              <div className="input-area flex w-full h-12 px-2 items-center gap-3 border border-slate-700 rounded-md ">
                <User size={20} color={"#6773e7"} weight="fill" />
                <input
                  type="date"
                  className="form-control w-full h-full bg-transparent px-2 focus:border-none focus:outline-none caret-transparent"
                  id="surname"
                  placeholder="Sobrenome"
                  autoComplete="false"
                />
              </div>
            </div>

            <button className="w-full h-12 bg-custom-purple rounded-md uppercase font-bold hover:scale-[0.98] hover:bg-custom-purple-hover transition-all">
              Entrar
            </button>
          </form>
          <div className="w-full max-w-sm grid gap-4">
            <span className="text-center text-sm">
              Ja possui uma conta?{" "}
              <Link
                href={"/signin"}
                className="text-custom-purple hover:scale-95 transition-all hover:bg-custom-purple-hover"
              >
                Faça login
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