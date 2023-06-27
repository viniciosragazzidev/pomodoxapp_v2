import { X } from "@phosphor-icons/react";
import { useContext, useState } from "react";

import { PomodoroContext } from "@/app/_context/PomodoroContext";
import { TodoContext } from "@/app/_context/TodoContext";
import { AppContext } from "@/app/_context/AppContext";
import { FormControlLabel } from "@mui/material";

import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";

export default function TodoModalComponent() {
  const { openModalTodo, setOpenModalTodo } = useContext(TodoContext);
  const { handleFocusEvent, currentFocus, handleBlurEvent } =
    useContext(AppContext);

  const Android12Switch = styled(Switch)(({ theme }) => ({
    padding: 8,
    "& .MuiSwitch-track": {
      borderRadius: 22 / 2,
      "&:before, &:after": {
        content: '""',
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        width: 16,
        height: 16,
      },
      "&:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
          theme.palette.getContrastText(theme.palette.primary.main)
        )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
        left: 12,
      },
      "&:after": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
          theme.palette.getContrastText(theme.palette.primary.main)
        )}" d="M19,13H5V11H19V13Z" /></svg>')`,
        right: 12,
      },
    },
    "& .MuiSwitch-thumb": {
      boxShadow: "none",
      width: 16,
      height: 16,
      margin: 2,
    },
  }));

  return (
    <div
      className={`modal z-50 w-full h-full overflow-y-auto flex flex-col gap-5 max-w-[480px] bg-[#060314] rounded-2xl px-6 py-10 fixed top-0 right-0  transition-transform  ${
        openModalTodo ? "translate-x-0" : "translate-x-[100vh]"
      } `}
    >
      <header className="flex justify-between items-center">
        <div className="flex flex-col">
          <span className="   text-lg  font-bold">Adicione uma tarefa:</span>
        </div>
        <span
          onClick={() => {
            setOpenModalTodo(false);
          }}
          className="cursor-pointer  hover:text-custom-purple-hover transition-all select-none "
        >
          <X size={20} weight="regular" />
        </span>
      </header>

      <div className="content ">
        <form className="grid gap-4">
          <div className="form-box grid gap-3">
            <label htmlFor="title-task" className="font-semibold">
              Titulo da tarefa:
            </label>
            <div
              className={`input-area flex w-full relative h-10 items-center gap-3 overflow-hidden  rounded-md ${
                currentFocus === "title-task"
                  ? "border-2 border-custom-purple"
                  : " border border-slate-700"
              }`}
            >
              <input
                onFocus={handleFocusEvent}
                onBlur={handleBlurEvent}
                type="text"
                id="title-task"
                className="bg-transparent w-full h-full px-4"
              />
            </div>
          </div>
          <div className="form-box grid gap-3">
            <label htmlFor="description-task" className="font-semibold">
              Descrição da tarefa:
            </label>
            <div
              className={`input-area flex w-full relative h-20 items-center gap-3 overflow-hidden  rounded-md ${
                currentFocus === "description-task"
                  ? "border-2 border-custom-purple"
                  : " border border-slate-700"
              }`}
            >
              <textarea
                onFocus={handleFocusEvent}
                onBlur={handleBlurEvent}
                id="description-task"
                className="bg-transparent w-full h-full px-4 resize-none focus:border-none focus:outline-none"
                name="description"
              />
            </div>
          </div>
          <div className="form-box grid gap-3">
            <label htmlFor="expiration-date" className="font-semibold">
              Data de vencimento:
            </label>
            <div
              className={`input-area flex w-full relative h-10 items-center gap-3 overflow-hidden  rounded-md ${
                currentFocus === "expiration-date"
                  ? "border-2 border-custom-purple"
                  : " border border-slate-700"
              }`}
            >
              <input
                onFocus={handleFocusEvent}
                onBlur={handleBlurEvent}
                type="date"
                id="expiration-date"
                className="bg-transparent w-full h-full px-4"
              />
            </div>
          </div>

          <div className="form-box grid gap-3">
            <div className="flex">
              <div className="grid gap-3 flex-1">
                <label htmlFor="category-task" className="font-semibold">
                  Categoria da tarefa:
                </label>
                <div className="flex items-center">
                  <div
                    className={`input-area flex w-full relative h-10 items-center gap-3 overflow-hidden  rounded-md ${
                      currentFocus === "category-task"
                        ? "border-2 border-custom-purple"
                        : " border border-slate-700"
                    }`}
                  >
                    <select
                      onFocus={handleFocusEvent}
                      onBlur={handleBlurEvent}
                      name="categorias"
                      id="category-task"
                      className=" w-full h-full px-4 bg-[#060314]"
                    >
                      <option value="trabalho">Trabalho</option>
                      <option value="pessoal">Pessoal</option>
                      <option value="estudo">Estudo</option>
                      <option value="financas">Finanças</option>
                      <option value="saude">Saúde</option>
                      <option value="casa">Casa</option>
                      <option value="outros">Outros</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="grid gap-3 px-5">
                <label htmlFor="alert">Lembrete:</label>
                <FormControlLabel
                  control={<Android12Switch defaultChecked />}
                  label=""
                />
              </div>
            </div>
          </div>

          <div className="form-box grid gap-3">
            <p className="font-semibold">Nivel de Prioridade:</p>
            <div className="inputs-box flex items-center gap-4">
              <div className="input flex items-center gap-2">
                <label htmlFor="baixa">Baixa:</label>
                <input
                  type="radio"
                  name="priority"
                  id="baixa"
                  className="accent-custom-purple-hover"
                  checked
                />
              </div>
              <div className="input flex items-center gap-2">
                <label htmlFor="media">Média:</label>
                <input
                  type="radio"
                  name="priority"
                  id="media"
                  className="accent-custom-purple-hover"
                />
              </div>
              <div className="input flex items-center gap-2">
                <label htmlFor="alta">Alta:</label>
                <input
                  type="radio"
                  name="priority"
                  id="alta"
                  className="accent-custom-purple-hover"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
