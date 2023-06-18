import { AppContext } from "@/app/context/AppContext";
import { UserCirclePlus } from "@phosphor-icons/react";
import { useContext, useState } from "react";

export const AddPerfilArea = () => {
  const { createProfile, setOpenAddNewProfile, openAddNewProfile, profiles,activateCustomNotifiication } =
    useContext(AppContext);
  const [name, setName] = useState("");
  const [idade, setIdade] = useState("");

  const handleProfileButton = () => {
    let idadeConverted = Number(idade);
    if (name.trim() === "" || idadeConverted <= 0) {
      activateCustomNotifiication('error', "Faltam dados, tente novamente!")
      return;
    }

    if (profiles.length >= 3) {
      alert("Numero maximo de perfis atingido 3/3");
      return;
    }

    createProfile(name, idade);
    activateCustomNotifiication('success', "Perfil criado com sucesso!");

    setOpenAddNewProfile(false);
    setName("");
    setIdade("");
  };
  return (
    <div className="flex flex-col gap-8 justify-center items-center addPerfilArea">
      <form className="flex max-sm:flex-col items-center gap-5">
        <div className="form-group flex flex-col items-start gap-2">
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            className="form-control h-9 rounded-md bg-transparent border-gray-300 border p-2 placeholder:text-sm"
            id="name"
            placeholder="Seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group flex flex-col items-start gap-2">
          <label htmlFor="email">Idade</label>
          <select
            name="type"
            id="type"
            className="form-control w-24 h-9 rounded-md bg-transparent border-gray-300 border p-2 select-none placeholder:text-sm"
            value={idade}
            onChange={(e) => setIdade(e.target.value)}
          >
            {Array.from({ length: 100 }).map(
              (el, i) =>
                i > 8 && (
                  <option
                    key={i}
                    value={i}
                    className="bg-dark py-2 select-none"
                  >
                    {i}
                  </option>
                )
            )}
          </select>
        </div>
      </form>
      <button
        onClick={handleProfileButton}
        className="py-[10px] bg-white w-full max-w-[260px] text-gray-800 font-bold rounded-md cursor-pointer transition-all hover:scale-95 "
        type="button"
      >
        Adicionar perfil
      </button>
      ou
      <span
        onClick={() => {
          setOpenAddNewProfile(!openAddNewProfile);
        }}
        className="text-sm   text-gray-400 hover:scale-95 transition-transform cursor-pointer flex items-center gap-2"
      >
        <UserCirclePlus size={26} weight="fill" /> Escolher perfil existente
      </span>
    </div>
  );
};
