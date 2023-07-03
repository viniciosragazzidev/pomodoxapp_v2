"use client";
import { PomodoroContext } from "@/app/_context/PomodoroContext";
import { TodoContext } from "@/app/_context/TodoContext";
import { GearSix, Pause, Play, RewindCircle } from "@phosphor-icons/react";

import { useContext, useEffect, useState } from "react";

const alarmAudio = "/audioAlarm.mp3";

const PomodoroClock = () => {
  class NotificationPlayer {
    private audio: HTMLAudioElement;

    constructor(audio: string) {
      this.audio = new Audio(audio);
    }

    play(): void {
      this.audio.play();
    }

    stop(): void {
      this.audio.pause();
      this.audio.currentTime = 0;
    }
  }

  const {
    setOpenModalPomodoro,
    openModalPomodoro,
    valueFocusTimer,
    valueShortTimer,
    valueLongTimer,
  } = useContext(PomodoroContext);

  useEffect(() => {
    // Utilize os valores do contexto aqui
    setAppValueFocusTimer(valueFocusTimer);
    setAppValueShortTimer(valueShortTimer * 60);
    setAppValueLongTimer(valueLongTimer * 60);

    setAppValueTimer(valueFocusTimer);
    reset();
  }, [valueFocusTimer, valueShortTimer, valueLongTimer, openModalPomodoro]);
  const { setOpenModalTodo } = useContext(TodoContext);

  const [appValueFocusTimer, setAppValueFocusTimer] = useState(valueFocusTimer);
  const [appValueShortTimer, setAppValueShortTimer] = useState(valueShortTimer);
  const [appValueLongTimer, setAppValueLongTimer] = useState(valueLongTimer);

  const [appValueTimer, setAppValueTimer] = useState(appValueFocusTimer * 60);
  const [degTimer, setDegTimer] = useState(0);
  const [stepFocus, setStepFocus] = useState(1);
  const [currentMode, setCurrentMode] = useState("");
  const [initialized, setInitialized] = useState(false);
  const [intervalApp, setIntervalApp] = useState<NodeJS.Timeout | null>(null);
  const [paused, setPaused] = useState(true);

  useEffect(() => {
    if (initialized) {
      cronometro();
    }
  }, [currentMode, initialized]);

  const [noticeNextStep, setNoticeNextStep] = useState<null | string>(null);
  const alertConfirm = () => {
    let cont = 10;

    let intervalNotice = setInterval(() => {
      setDegTimer(0);
      if (cont > 0) {
        setNoticeNextStep(`${cont}`);
        cont--;
      } else {
        clearInterval(intervalNotice);
      }
    }, 1000);
    setNoticeNextStep(null);
  };

  const startFocus = () => {
    setAppValueTimer(appValueFocusTimer);

    setStepFocus(stepFocus + 1);
    setCurrentMode("focus");
  };
  const startShortPause = () => {
    setAppValueTimer(appValueShortTimer);

    setCurrentMode("shortBreak");
  };
  const startLongPause = () => {
    setAppValueTimer(appValueLongTimer);

    setCurrentMode("longBreak");
  };

  const cronometro = () => {
    const player = new NotificationPlayer(alarmAudio);

    let valuei = appValueTimer;
    const calcDeg = 360 / appValueTimer;
    let degVar = degTimer;

    const interval = setInterval(() => {
      if (valuei > 0) {
        valuei--;
        degVar += calcDeg;
        setDegTimer(degVar);
        setAppValueTimer(valuei);
      } else {
        player.play();
        alertConfirm();
        clearInterval(interval);
        setTimeout(() => {
          player.stop();

          if (currentMode === "focus") {
            if (stepFocus < 5) {
              setNoticeNextStep(null);
              startShortPause();

              return;
            } else {
              setNoticeNextStep(null);
              startLongPause();
              return;
            }
          }
          if (currentMode === "shortBreak") {
            setNoticeNextStep(null);
            startFocus();
            return;
          }

          if (currentMode === "longBreak") {
            setNoticeNextStep(null);
            startFocus();
            setStepFocus(1);
            return;
          }
        }, 10000);
      }
    }, 1000);
    setIntervalApp(interval);
  };

  const pause = () => {
    if (intervalApp) {
      clearInterval(intervalApp);

      setPaused(true);
    }
  };

  const play = () => {
    setPaused(false);

    if (intervalApp) {
      cronometro();
    } else {
      setInitialized(true);
      setCurrentMode("focus");
    }
  };

  const reset = () => {
    if (intervalApp) {
      clearInterval(intervalApp);
    }
    setAppValueTimer(appValueFocusTimer * 60);

    setPaused(true);
    setDegTimer(0);
    setNoticeNextStep(null);
    setCurrentMode("focus");
  };

  const getTempoAtual = () => {
    let calcMinutes = Math.floor(appValueTimer / 60);
    let minutos = calcMinutes > 0 ? `${calcMinutes} min` : "";
    let calcSecond = appValueTimer % 60;

    let segundos =
      calcSecond < 10 && calcSecond > 0
        ? `0${calcSecond} seg`
        : calcSecond === 0
        ? ""
        : `${calcSecond} seg`;
    let tela = `${minutos} ${segundos}`;

    return `${tela}`;
  };
  return (
    <div className="pomodoro-clock w-full h-full flex flex-col gap-4 justify-center items-center max-md:py-10 relative">
      <div className="flex w-full max-w-xs justify-center relative">
        <span
          onClick={() => {
            setOpenModalPomodoro(!openModalPomodoro);
            setOpenModalTodo(false);
          }}
          className="cursor-pointer select-none hover:text-custom-purple-hover transition-all absolute left-0 top-0"
        >
          <GearSix size={24} weight="fill" />
        </span>
        <span>
          {currentMode === "focus" || intervalApp === null
            ? "focus"
            : currentMode === "shortBreak"
            ? "short break"
            : "long break"}
        </span>
      </div>
      <div
        className="circular-progress w-64 h-64 relative rounded-full bg-[#060314] flex items-center justify-center before:w-56 before:h-56 before:absolute transition-all before:bg-black before:rounded-full"
        style={{
          background: `conic-gradient(#ededed ${degTimer}deg,  ${
            currentMode === "focus" || currentMode === ""
              ? "#4334c7"
              : "#036b95"
          }  0deg`,
        }}
      >
        <span className="text-white text-2xl font-bold z-40 select-none">
          {noticeNextStep != null ? noticeNextStep : getTempoAtual()}
        </span>
      </div>

      <div className="flex w-full justify-between max-w-[100px]">
        <div className="play">
          {paused ? (
            <span
              onClick={() => {
                play();
              }}
              className="cursor-pointer hover:text-custom-purple-hover transition-all select-none"
            >
              <Play size={24} weight="fill" />
            </span>
          ) : (
            <span
              onClick={() => {
                pause();
              }}
              className="cursor-pointer text-xl hover:text-custom-purple-hover transition-all select-none"
            >
              <Pause size={24} weight="fill" />
            </span>
          )}
        </div>
        <div className="reload">
          <span
            onClick={() => {
              reset();
            }}
            className="cursor-pointer hover:text-custom-purple-hover transition-all"
          >
            <RewindCircle size={24} weight="fill" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default PomodoroClock;
