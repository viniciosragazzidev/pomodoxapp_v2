import { PomodoroContext } from "@/app/_context/PomodoroContext";
import { ProfileContext } from "@/app/_context/ProfilesContext";
import { TodoContext } from "@/app/_context/TodoContext";
import { Pencil, Play, WifiMedium } from "@phosphor-icons/react";
import { useContext, useEffect } from "react";

export default function TodoComponent() {
  const {
    openModalTodo,
    setOpenModalTodo,
    todos,
    setTodos,
    openModalEditTodo,
    setOpenModalEditTodo,
    currentTodoEditId,
    setCurrentTodoEditId,
  } = useContext(TodoContext);
  const { currentProfileLogged } = useContext(ProfileContext);

  const { setOpenModalPomodoro } = useContext(PomodoroContext);

  useEffect(() => {
    const allTodosUsers = localStorage.getItem("allUsersTodos");

    if (allTodosUsers !== null) {
      const todosData = JSON.parse(allTodosUsers);
      if (currentProfileLogged) {
        const todosArray = todosData[currentProfileLogged[0].id];

        
        if (todosArray !== undefined) {
          setTodos(todosArray);
        }
      }
    }
  }, [currentProfileLogged]);

  const handleTodoCheckbox = (id: number) => {
    todos.forEach((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
    });
  };

  const handleEditTodo = (id: number) => {
    setCurrentTodoEditId(id);
    setOpenModalEditTodo(!openModalEditTodo);
  };
  return (
    <div className="w-full h-full  px-2 max-[420px]:max-w-xs flex flex-col gap-6  items-center">
      <div className=" flex flex-col max-w-lg max-md:max-w-none max-[420px]:max-w-xs gap-5">
        <header>
          <h1 className="text-2xl font-bold text-gray-300">Lista de Tarefas</h1>
          <p className="text-zinc-400 text-sm">
            {" "}
            Aqui você pode adicionar e gerenciar suas tarefas a serem
            completadas.
          </p>
        </header>
        <div className="flex justify-between w-full h-10 gap-4">
          <button
            onClick={() => {
              setOpenModalTodo(true);
              setOpenModalPomodoro(false);
            }}
            className="add bg-custom-purple-hover px-5  rounded-md hover:scale-95 hover:bg-custom-purple-hover transition-all"
          >
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
        <div className="todos w-full grid divide-y-4 divide-dark max-h-[400px] overflow-y-auto overflow-x-hidden  scrollbar scrollbar-thumb-custom-purple-hover scrollbar-w-1">
          {todos.map((todo) => (
            <div
              key={todo.id}
              className="todo  flex justify-between items-center gap-2 h-16 bg-[#060314] px-4 rounded-md w-full max-[420px]:max-w-xs "
            >
              <div className="flex gap-2 ">
                <input
                  type="checkbox"
                  onChange={() => {
                    handleTodoCheckbox(todo.id);
                  }}
                  id={`check-${todo.id}`}
                />
                <label
                  htmlFor={`check-${todo.id}`}
                  className="overflow-hidden  max-w-xs max-[420px]:max-w-[180px] overflow-ellipsis"
                >
                  <span className=" text-sm font-bold text-gray-300  whitespace-nowrap ">
                    {todo.title}
                  </span>
                </label>
              </div>
              <div className="flex gap-3">
                <span
                  className="cursor-pointer hover:text-custom-purple-hover transition-all"
                  onClick={() => {
                    handleEditTodo(todo.id);
                  }}
                >
                  <Pencil weight="fill" />
                </span>

                <span className="cursor-pointer hover:text-custom-purple-hover transition-all">
                  <Play weight="fill" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
