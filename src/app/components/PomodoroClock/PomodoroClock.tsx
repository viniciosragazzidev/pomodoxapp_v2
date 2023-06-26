import {
  ClockClockwise,
  Pause,
  Play,
  RewindCircle,
} from "@phosphor-icons/react";

import { useState } from "react";

const PomodoroClock = () => {
  const [totalMinutos, setTotalMinutos] = useState<number>(1);
  const [degAtual, setDegAtual] = useState<number>(0);

  const [segundosRestantes, setSegundosRestantes] = useState<number>(
    totalMinutos * 60
  );

  const [paused, setPaused] = useState<boolean>(false);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null); // Variável para armazenar o intervalo

  const reset = () => {
    setDegAtual(0);

    setSegundosRestantes(totalMinutos * 60);

    setPaused(false);

    if (timer) {
      clearInterval(timer);
      setTimer(null); // Limpa o intervalo se existir
    }
  };
  const start = () => {
    setPaused(true);
    if (!timer) {
      // Inicia um novo intervalo somente se não existir
      let dgA = 0;
      let segRes = totalMinutos * 60;
      cronometro(dgA, segRes);
    } else {
      cronometro(degAtual, segundosRestantes);
    }
  };
  const pause = () => {
    setPaused(false);
    if (timer) {
      clearInterval(timer);
    }
  };

  const cronometro = (dgA: number, segRes: number) => {
    const segundos = totalMinutos * 60;

    const timer = setInterval(() => {
      dgA += 360 / segundos;

      if (dgA <= 360) {
        segRes -= 1;

        setDegAtual(dgA);
        setSegundosRestantes(segRes);
      } else {
        reset();
      }
    }, 1000);
    setTimer(timer);
  };
  const getTempoAtual = () => {
    const minutos = Math.floor(segundosRestantes / 60);
    const segundos = segundosRestantes % 60;
    const segFormated = ` ${segundos} seg`;
    const minFormated = minutos === 0 ? '' : ` ${minutos} min`;
    return `${minFormated}  ${segFormated}`;
  };
  return (
    <div className="pomodoro-clock w-full h-full flex flex-col gap-4 justify-center items-center max-md:py-10">
      <div className="flex"></div>
      <div
        className="circular-progress w-64 h-64 relative rounded-full bg-[#060314] flex items-center justify-center before:w-56 before:h-56 before:absolute before:bg-black before:rounded-full"
        style={{
          background: `conic-gradient(#ededed ${degAtual}deg, #4334c7 0deg`,
        }}
      >
        <span className="text-white text-2xl font-bold z-50">{getTempoAtual()}</span>
      </div>

      <div className="flex w-full justify-between max-w-[100px]">
        <div className="play">
          {!paused ? (
            <span
              onClick={() => {
                start();
              }}
              className="cursor-pointer hover:text-custom-purple-hover transition-all"
            >
              <Play size={24} weight="fill" />
            </span>
          ) : (
            <span
              onClick={() => {
                pause();
              }}
              className="cursor-pointer text-xl hover:text-custom-purple-hover transition-all"
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
