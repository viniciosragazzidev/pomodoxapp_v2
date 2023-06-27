import { X } from "@phosphor-icons/react";
import { useContext, useState } from "react";

import { PomodoroContext } from "@/app/_context/PomodoroContext";
import { TodoContext } from "@/app/_context/TodoContext";

export default function TodoModalComponent() {



  const {openModalTodo, setOpenModalTodo} = useContext(TodoContext)
  
  return (

      <div
        className={`modal z-50 w-full h-full flex flex-col gap-5 max-w-[480px] bg-[#060314] rounded-2xl px-4 py-10 fixed top-0 right-0  transition-transform  ${openModalTodo ? 'translate-x-0' : 'translate-x-[100vh]'} `}
      >
        <header className="flex justify-between items-center">
          <div className="flex flex-col">
            <span className="     font-bold">Configuração:</span>
          </div>
          <span onClick={()=>{setOpenModalTodo(false)}} className="cursor-pointer  hover:text-custom-purple-hover transition-all select-none ">
            <X size={20} weight="regular" />
          </span>
        </header>

      </div>

  );
}
