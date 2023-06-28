import { X } from "@phosphor-icons/react";
import { useContext, useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

import { PomodoroContext } from "@/app/_context/PomodoroContext";

export default function ModalPomodoroClock() {
  const [valueDurationPomodoro, setValueDurationPomodoro] = useState(0);
  const [valueDurationShortBreak, setValueDurationShortBreak] = useState(0);
  const [valueDurationLongBreak, setValueDurationLongBreak] = useState(0);

  const [notifificationSound, setNotifificationSound] = useState(false);
  const [fullscreenMode, setFullscreenMode] = useState(false);
  const [notificationByPush, setNotificationByPush] = useState(false);
  
  function valueTextDurantionPomodoro(value: number) {
    setValueDurationPomodoro(value);
    return `${value}`;
  }
  function valueTextDurantionShortBreak(value: number) {
    setValueDurationShortBreak(value);
    return `${value}`;
  }
  function valueTextDurantionLongBreak(value: number) {
    setValueDurationLongBreak(value);
    return `${value}`;
  }



  const {setOpenModalPomodoro, openModalPomodoro} = useContext(PomodoroContext)
  
  return (

      <div
      className={`modal z-50 w-full h-full flex flex-col overflow-y-auto gap-5 max-w-[480px] bg-[#060314] rounded-2xl px-4 py-10 fixed top-0 left-0  transition-transform ${
        openModalPomodoro ? "translate-x-0" : "translate-x-[-100vh]"
      }`}
    >
      <header className="flex justify-between items-center">
        <div className="flex flex-col">
          <span className="     font-bold">Configuração:</span>
        </div>
        <span
          onClick={() => {
            setOpenModalPomodoro(false);
          }}
          className="cursor-pointer  hover:text-custom-purple-hover transition-all select-none "
        >
          <X size={20} weight="regular" />
        </span>
      </header>

      <div className="flex flex-col gap-8 divide-y-2  divide-dark">
        <div className="configsListPomodoro flex flex-col gap-6 pt-4  ">
          <div className="config flex flex-col gap-4">
            <span className="font-bold text-sm">Duração do Pomodoro:</span>
            <div className="flex gap-4 items-center">
              <Box sx={{ width: 300 }}>
                <Slider
                  aria-label="Small steps"
                  defaultValue={0.1}
                  getAriaValueText={valueTextDurantionPomodoro}
                  step={5}
                  marks
                  min={0.1}
                  max={60}
                  valueLabelDisplay="auto"
                  color="primary"
                />
              </Box>
              <span className=" pb-1 border-b-2 border-b-custom-purple-hover   ">
                {valueDurationPomodoro}
              </span>
            </div>
          </div>

          <div className="config flex flex-col gap-4">
            <span className="font-bold text-sm">Duração da Pausa Curta:</span>
            <div className="flex gap-4 items-center">
              <Box sx={{ width: 300 }}>
                <Slider
                  aria-label="Small steps"
                  defaultValue={5}
                  getAriaValueText={valueTextDurantionShortBreak}
                  step={5}
                  marks
                  min={5}
                  max={30}
                  valueLabelDisplay="auto"
                  color="primary"
                />
              </Box>
              <span className=" pb-1 border-b-2 border-b-custom-purple-hover   ">
                {valueDurationShortBreak}
              </span>
            </div>
          </div>

          <div className="config flex flex-col gap-4">
            <span className="font-bold text-sm">Duração da Pausa Longa:</span>
            <div className="flex gap-4 items-center">
              <Box sx={{ width: 300 }}>
                <Slider
                  aria-label="Small steps"
                  defaultValue={15}
                  getAriaValueText={valueTextDurantionLongBreak}
                  step={5}
                  marks
                  min={15}
                  max={60}
                  valueLabelDisplay="auto"
                  color="primary"
                />
              </Box>
              <span className=" pb-1 border-b-2 border-b-custom-purple-hover   ">
                {valueDurationLongBreak}
              </span>
            </div>
          </div>
        </div>

        <div className="configListApp pt-6 flex flex-col gap-8 ">
          <div className="config flex items-center  gap-5">
            <span className="font-bold text-sm">Som de Notificação:</span>
            <label className="switch">
              <input
                type="checkbox"
                onChange={(e) => {
                  setNotifificationSound(e.target.checked);
                }}
              />
              <span className="slider round"></span>
            </label>
          </div>
          <div className="config flex items-center  gap-5">
            <span className="font-bold text-sm">Modo de Tela Cheia:</span>

            <label className="switch">
              <input
                type="checkbox"
                onChange={(e) => {
                  setFullscreenMode(e.target.checked);
                }}
              />
              <span className="slider round"></span>
            </label>
          </div>
          <div className="config flex items-center  gap-5">
            <span className="font-bold text-sm">Notificações por Push:</span>
            <label className="switch">
              <input
                type="checkbox"
                onChange={(e) => {
                  setNotificationByPush(e.target.checked);
                }}
              />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
      </div>
    </div>

  );
}
