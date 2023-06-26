import { Pencil, Play, WifiMedium } from "@phosphor-icons/react";

export default function TodoComponent() {
  return (
    <div className="w-full h-full px-2 flex flex-col gap-6 justify-center items-center">
      <div className="container flex flex-col max-w-lg max-md:max-w-none gap-5">
        <header>
          <h1 className="text-2xl font-bold text-gray-300">Lista de Tarefas</h1>
          <p className="text-zinc-400 text-sm">
            {" "}
            Aqui você pode adicionar e gerenciar suas tarefas a serem
            completadas.
          </p>
        </header>
        <div className="flex justify-between w-full h-10">
          <button className="add bg-custom-purple-hover px-5  rounded-md hover:scale-95 hover:bg-custom-purple-hover transition-all">
            Adicionar
          </button>

          <div>
            <select
              name="filter"
              id="filter"
              className="bg-dark h-full border border-custom-purple-hover px-2 rounded-md"
            >
              <option className="h-9" value="all">
                Todas
              </option>
              <option className="h-9" value="active">
                Ativos
              </option>
              <option className="h-9" value="completed">
                Completadas
              </option>
            </select>
          </div>
        </div>
        <div className="todos grid divide-y-4 divide-dark max-h-[400px] overflow-y-auto overflow-x-hidden  scrollbar scrollbar-thumb-custom-purple-hover scrollbar-w-1">
          <div className="todo  flex justify-between items-center gap-2 h-16 bg-[#060314] px-4 rounded-md w-full ">
            <div className="flex gap-2">
              <input type="checkbox" className="check" id="check" />
              <label
                htmlFor="check"
                className="overflow-hidden  max-w-xs  overflow-ellipsis"
              >
                <span className=" text-sm font-bold text-gray-300  whitespace-nowrap ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  est eligendi nostrum. Error provident cumque odit consequuntur
                  consectetur ab culpa sunt, quae pariatur illo iure fugit
                  veritatis eum, voluptas porro.
                </span>
              </label>
            </div>
            <div className="flex gap-3">
              <span className="cursor-pointer hover:text-custom-purple-hover transition-all">
                <Pencil weight="fill" />
              </span>

              <span className="cursor-pointer hover:text-custom-purple-hover transition-all">
                <Play weight="fill" />
              </span>
            </div>
          </div>
          <div className="todo  flex justify-between items-center gap-2 h-16 bg-[#060314] px-4 rounded-md w-full ">
            <div className="flex gap-2">
              <input type="checkbox" className="check" id="check" />
              <label
                htmlFor="check"
                className="overflow-hidden  max-w-xs  overflow-ellipsis"
              >
                <span className=" text-sm font-bold text-gray-300  whitespace-nowrap ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  est eligendi nostrum. Error provident cumque odit consequuntur
                  consectetur ab culpa sunt, quae pariatur illo iure fugit
                  veritatis eum, voluptas porro.
                </span>
              </label>
            </div>
            <div className="flex gap-3">
              <span className="cursor-pointer hover:text-custom-purple-hover transition-all">
                <Pencil weight="fill" />
              </span>

              <span className="cursor-pointer hover:text-custom-purple-hover transition-all">
                <Play weight="fill" />
              </span>
            </div>
          </div>
          <div className="todo  flex justify-between items-center gap-2 h-16 bg-[#060314] px-4 rounded-md w-full ">
            <div className="flex gap-2">
              <input type="checkbox" className="check" id="check" />
              <label
                htmlFor="check"
                className="overflow-hidden  max-w-xs  overflow-ellipsis"
              >
                <span className=" text-sm font-bold text-gray-300  whitespace-nowrap ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  est eligendi nostrum. Error provident cumque odit consequuntur
                  consectetur ab culpa sunt, quae pariatur illo iure fugit
                  veritatis eum, voluptas porro.
                </span>
              </label>
            </div>
            <div className="flex gap-3">
              <span className="cursor-pointer hover:text-custom-purple-hover transition-all">
                <Pencil weight="fill" />
              </span>

              <span className="cursor-pointer hover:text-custom-purple-hover transition-all">
                <Play weight="fill" />
              </span>
            </div>
          </div>
          <div className="todo  flex justify-between items-center gap-2 h-16 bg-[#060314] px-4 rounded-md w-full ">
            <div className="flex gap-2">
              <input type="checkbox" className="check" id="check" />
              <label
                htmlFor="check"
                className="overflow-hidden  max-w-xs  overflow-ellipsis"
              >
                <span className=" text-sm font-bold text-gray-300  whitespace-nowrap ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  est eligendi nostrum. Error provident cumque odit consequuntur
                  consectetur ab culpa sunt, quae pariatur illo iure fugit
                  veritatis eum, voluptas porro.
                </span>
              </label>
            </div>
            <div className="flex gap-3">
              <span className="cursor-pointer hover:text-custom-purple-hover transition-all">
                <Pencil weight="fill" />
              </span>

              <span className="cursor-pointer hover:text-custom-purple-hover transition-all">
                <Play weight="fill" />
              </span>
            </div>
          </div>
          <div className="todo  flex justify-between items-center gap-2 h-16 bg-[#060314] px-4 rounded-md w-full ">
            <div className="flex gap-2">
              <input type="checkbox" className="check" id="check" />
              <label
                htmlFor="check"
                className="overflow-hidden  max-w-xs  overflow-ellipsis"
              >
                <span className=" text-sm font-bold text-gray-300  whitespace-nowrap ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  est eligendi nostrum. Error provident cumque odit consequuntur
                  consectetur ab culpa sunt, quae pariatur illo iure fugit
                  veritatis eum, voluptas porro.
                </span>
              </label>
            </div>
            <div className="flex gap-3">
              <span className="cursor-pointer hover:text-custom-purple-hover transition-all">
                <Pencil weight="fill" />
              </span>

              <span className="cursor-pointer hover:text-custom-purple-hover transition-all">
                <Play weight="fill" />
              </span>
            </div>
          </div>
          <div className="todo  flex justify-between items-center gap-2 h-16 bg-[#060314] px-4 rounded-md w-full ">
            <div className="flex gap-2">
              <input type="checkbox" className="check" id="check" />
              <label
                htmlFor="check"
                className="overflow-hidden  max-w-xs  overflow-ellipsis"
              >
                <span className=" text-sm font-bold text-gray-300  whitespace-nowrap ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  est eligendi nostrum. Error provident cumque odit consequuntur
                  consectetur ab culpa sunt, quae pariatur illo iure fugit
                  veritatis eum, voluptas porro.
                </span>
              </label>
            </div>
            <div className="flex gap-3">
              <span className="cursor-pointer hover:text-custom-purple-hover transition-all">
                <Pencil weight="fill" />
              </span>

              <span className="cursor-pointer hover:text-custom-purple-hover transition-all">
                <Play weight="fill" />
              </span>
            </div>
          </div>
          <div className="todo  flex justify-between items-center gap-2 h-16 bg-[#060314] px-4 rounded-md w-full ">
            <div className="flex gap-2">
              <input type="checkbox" className="check" id="check" />
              <label
                htmlFor="check"
                className="overflow-hidden  max-w-xs  overflow-ellipsis"
              >
                <span className=" text-sm font-bold text-gray-300  whitespace-nowrap ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  est eligendi nostrum. Error provident cumque odit consequuntur
                  consectetur ab culpa sunt, quae pariatur illo iure fugit
                  veritatis eum, voluptas porro.
                </span>
              </label>
            </div>
            <div className="flex gap-3">
              <span className="cursor-pointer hover:text-custom-purple-hover transition-all">
                <Pencil weight="fill" />
              </span>

              <span className="cursor-pointer hover:text-custom-purple-hover transition-all">
                <Play weight="fill" />
              </span>
            </div>
          </div>
          <div className="todo  flex justify-between items-center gap-2 h-16 bg-[#060314] px-4 rounded-md w-full ">
            <div className="flex gap-2">
              <input type="checkbox" className="check" id="check" />
              <label
                htmlFor="check"
                className="overflow-hidden  max-w-xs  overflow-ellipsis"
              >
                <span className=" text-sm font-bold text-gray-300  whitespace-nowrap ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  est eligendi nostrum. Error provident cumque odit consequuntur
                  consectetur ab culpa sunt, quae pariatur illo iure fugit
                  veritatis eum, voluptas porro.
                </span>
              </label>
            </div>
            <div className="flex gap-3">
              <span className="cursor-pointer hover:text-custom-purple-hover transition-all">
                <Pencil weight="fill" />
              </span>

              <span className="cursor-pointer hover:text-custom-purple-hover transition-all">
                <Play weight="fill" />
              </span>
            </div>
          </div>
          <div className="todo  flex justify-between items-center gap-2 h-16 bg-[#060314] px-4 rounded-md w-full ">
            <div className="flex gap-2">
              <input type="checkbox" className="check" id="check" />
              <label
                htmlFor="check"
                className="overflow-hidden  max-w-xs  overflow-ellipsis"
              >
                <span className=" text-sm font-bold text-gray-300  whitespace-nowrap ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  est eligendi nostrum. Error provident cumque odit consequuntur
                  consectetur ab culpa sunt, quae pariatur illo iure fugit
                  veritatis eum, voluptas porro.
                </span>
              </label>
            </div>
            <div className="flex gap-3">
              <span className="cursor-pointer hover:text-custom-purple-hover transition-all">
                <Pencil weight="fill" />
              </span>

              <span className="cursor-pointer hover:text-custom-purple-hover transition-all">
                <Play weight="fill" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
