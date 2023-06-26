import { useEffect, useState } from "react";

type Props = {
  totalMinutos: number;
};

const PomodoroClock = () => {
  const [totalMinutos, setTotalMinutos] = useState<number>(0.3);
  const [degAtual, setDegAtual] = useState<number>(0);
  const [tempoAtual, setTempoAtual] = useState<string>("");
  const [segundosRestantes, setSegundosRestantes] = useState<number>(0);
  const [iniciado, setIniciado] = useState<boolean>(false);
  const cronometro = (minutos: number) => {
    const segundos = minutos * 60;
    setSegundosRestantes(segundos);
    let dgA = 0;
    let segRes = segundos;

    if (!iniciado) {
        setIniciado(true);
      const timer = setInterval(() => {
        dgA += 360 / segundos;
        segRes -= 1;

        if (dgA <= 360) {
          setDegAtual(dgA);
          setSegundosRestantes(segRes);
        } else {
          clearInterval(timer);
          setIniciado(false);
        }
      }, 1000);
    }
  };


  return (
    <div className="pomodoro-clock w-full h-full flex flex-col gap-4 justify-center items-center max-md:py-10">
      <div
        className="circular-progress w-64 h-64 relative rounded-full bg-[#060314] flex items-center justify-center before:w-56 before:h-56 before:absolute before:bg-black before:rounded-full"
        style={{
          background: `conic-gradient(#ededed ${degAtual}deg, #4334c7 0deg`,
        }}
      >
        <span className="text-white font-bold z-50">
          {segundosRestantes} {degAtual}
        </span>
      </div>

      <button onClick={()=>cronometro(totalMinutos)} className="bg-custom-purple-hover px-6 py-2 rounded-md hover:scale-95 hover:bg-custom-purple-hover transition-all">
        Iniciar
      </button>
    </div>
  );
};

export default PomodoroClock;
