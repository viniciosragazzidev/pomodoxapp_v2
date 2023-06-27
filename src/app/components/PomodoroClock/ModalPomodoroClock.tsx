import { X } from "@phosphor-icons/react";
import { useContext, useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

import { styled } from "@mui/material/styles";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { PomodoroContext } from "@/app/_context/PomodoroContext";

export default function ModalPomodoroClock() {
  const [valueDurationPomodoro, setValueDurationPomodoro] = useState(0);
  const [valueDurationShortBreak, setValueDurationShortBreak] = useState(0);
  const [valueDurationLongBreak, setValueDurationLongBreak] = useState(0);

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


  const {setOpenModalPomodoro, openModalPomodoro} = useContext(PomodoroContext)
  
  return (

      <div
        className={`modal z-50 w-full h-full flex flex-col overflow-y-auto gap-5 max-w-[480px] bg-[#060314] rounded-2xl px-4 py-10 fixed top-0 left-0  transition-transform ${openModalPomodoro ? 'translate-x-0' : 'translate-x-[-100vh]'}`}
      >
        <header className="flex justify-between items-center">
          <div className="flex flex-col">
            <span className="     font-bold">Configuração:</span>
          </div>
          <span onClick={()=>{setOpenModalPomodoro(false)}} className="cursor-pointer  hover:text-custom-purple-hover transition-all select-none ">
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
                    defaultValue={20}
                    getAriaValueText={valueTextDurantionPomodoro}
                    step={5}
                    marks
                    min={20}
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

          <div className="configListApp pt-6 flex flex-col gap-4 ">
            <div className="config flex items-center  gap-5">
              <span className="font-bold text-sm">Som de Notificação:</span>
              <FormControlLabel
                control={<Android12Switch defaultChecked />}
                label=""
              />
            </div>
            <div className="config flex items-center  gap-5">
              <span className="font-bold text-sm">Modo de Tela Cheia:</span>
              <FormControlLabel
                control={<Android12Switch defaultChecked />}
                label=""
              />
            </div>
            <div className="config flex items-center  gap-5">
              <span className="font-bold text-sm">Notificações por Push:</span>
              <FormControlLabel
                control={<Android12Switch defaultChecked />}
                label=""
              />
            </div>
          </div>
        </div>
      </div>

  );
}
