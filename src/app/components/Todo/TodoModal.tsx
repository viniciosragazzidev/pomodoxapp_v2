import { X } from "@phosphor-icons/react";
import { useContext, useEffect, useState } from "react";

import { PomodoroContext } from "@/app/_context/PomodoroContext";
import { TodoContext } from "@/app/_context/TodoContext";
import { AppContext } from "@/app/_context/AppContext";
import { FormControlLabel } from "@mui/material";

import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";

export default function TodoModalComponent() {
  const {
    openModalTodo,
    setOpenModalTodo,
    todos,
    setTodos,
    openModalEditTodo,
    setOpenModalEditTodo,
    currentTodoEditId,
    setCurrentTodoEditId,
    allUsersTodos,
    setAllUsersTodos,
  } = useContext(TodoContext);
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

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [category, setCategory] = useState("trabalho");
  const [reminder, setReminder] = useState(false);
  const [priority, setPriority] = useState("baixa");

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    switch (name) {
      case "title":
        setTitle(value);
        break;
      case "description":
        setDescription(value);
        break;
      case "expirationDate":
        setExpirationDate(value);
        break;
      case "category":
        setCategory(value);
        break;
      case "reminder":
        setReminder(e.target.checked);
        break;
      case "priority":
        setPriority(value);
        break;
      default:
        break;
    }
  };

  const resetFields = () => {
    setTitle("");
    setDescription("");
    setExpirationDate("");
    setCategory("");
    setPriority("baixa");
    setReminder(false);
    setOpenModalEditTodo(false);
    setCurrentTodoEditId(0);
  };

  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    const userCurrent = window.localStorage.getItem("loggedByProfile");
    const allUsersTodos = window.localStorage.getItem("allUsersTodos");

    setCurrentUser(userCurrent && JSON.parse(userCurrent));
    setAllUsersTodos(allUsersTodos && JSON.parse(allUsersTodos));
  }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Lógica para enviar os dados do formulário
    if (title.length > 0 && expirationDate.length > 0) {
      const todosCopy = [...todos];

      if (openModalEditTodo) {
        todosCopy.forEach((todo) => {
          if (todo.id === currentTodoEditId) {
            todo.title = title;
            todo.description = description;
            todo.date = expirationDate;
            todo.category = category;
            todo.activedRemider = reminder;
            todo.priority = priority;
          }
        });
      } else {
        const todo = {
          id: (Number(new Date()) + Math.floor(Math.random() * 999 )),
          title: title,
          description: description,
          date: expirationDate,
          completed: false,
          category: category,
          activedRemider: reminder,
          priority: priority,
        };

        todosCopy.unshift(todo);
      }

      const allUsersTds: { [key: string]: any[] } = { ...allUsersTodos };

      const arrayName = currentUser.toString();
      const array = todosCopy;

      allUsersTds[arrayName] = array;

      setAllUsersTodos(allUsersTds);

      localStorage.setItem("allUsersTodos", JSON.stringify(allUsersTds));

      setTodos(todosCopy);
      setOpenModalTodo(!openModalTodo);
      resetFields();
    } else {
      return;
    }
  };
  const handleDeleteTodo = (e: any) => {
    const todosCopy = [...todos];

    if (openModalEditTodo) {
      for (let i = todosCopy.length - 1; i >= 0; i--) {
        const todo = todosCopy[i];
        if (todo.id === currentTodoEditId) {
          todosCopy.splice(i, 1);
        }
      }
    

       let confirm = window.confirm("Tem certeza que deseja excluir " + currentTodoEditId)

       if (confirm) {
        const allUsersTds: { [key: string]: any[] } = { ...allUsersTodos };

        const arrayName = currentUser.toString();
        const array = todosCopy;
    
        allUsersTds[arrayName] = array;
    
        setAllUsersTodos(allUsersTds);
    
        localStorage.setItem("allUsersTodos", JSON.stringify(allUsersTds));
    
        setTodos(todosCopy);
        setOpenModalTodo(!openModalTodo);
        resetFields();
       }
    }

  };
  useEffect(() => {
    
    if (openModalEditTodo) {
      todos.forEach((todo) => {
        if (todo.id === currentTodoEditId) {
          setTitle(todo.title);
          setDescription(todo.description);
          setExpirationDate(todo.date);
          setCategory(todo.category);
          setReminder(todo.activedRemider);
          setPriority(todo.priority);
        }
      });

      setOpenModalTodo(true);
    }

    return;
  }, [openModalEditTodo]);

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
            resetFields();
          }}
          className="cursor-pointer  hover:text-custom-purple-hover transition-all select-none "
        >
          <X size={20} weight="regular" />
        </span>
      </header>

      <div className="content ">
        <form className="grid gap-4" onSubmit={handleSubmit}>
          {/* Resto do código do formulário */}
          <div className="form-box grid gap-3">
            <label htmlFor="title-task" className="font-semibold">
              Titulo da tarefa:
            </label>
            <div
              className={`input-area flex w-full relative h-10 items-center gap-3 overflow-hidden  rounded-md `}
            >
              <input
                type="text"
                id="title-task"
                className="bg-transparent w-full h-full px-4"
                name="title"
                value={title}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="form-box grid gap-3">
            <label htmlFor="description-task" className="font-semibold">
              Descrição da tarefa:
            </label>
            <div
              className={`input-area flex w-full relative h-20 items-center gap-3 overflow-hidden  rounded-md `}
            >
              <textarea
                id="description-task"
                className="bg-transparent w-full h-full px-4 resize-none focus:border-none focus:outline-none"
                name="description"
                value={description}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="form-box grid gap-3">
            <label htmlFor="expiration-date" className="font-semibold">
              Data de vencimento:
            </label>
            <div
              className={`input-area flex w-full relative h-10 items-center gap-3 overflow-hidden  rounded-md `}
            >
              <input
                type="date"
                id="expiration-date"
                className="bg-transparent w-full h-full px-4"
                name="expirationDate"
                value={expirationDate}
                onChange={handleInputChange}
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
                    className={`input-area flex w-full relative h-10 items-center gap-3 overflow-hidden  rounded-md `}
                  >
                    <select
                      name="category"
                      id="category-task"
                      className=" w-full h-full px-4 bg-[#060314]"
                      value={category}
                      onChange={handleInputChange}
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
                  control={
                    <Android12Switch
                      defaultChecked={reminder}
                      onChange={handleInputChange}
                      name="reminder"
                    />
                  }
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
                  checked={priority === "baixa"}
                  value="baixa"
                  onChange={handleInputChange}
                />
              </div>
              <div className="input flex items-center gap-2">
                <label htmlFor="media">Média:</label>
                <input
                  type="radio"
                  name="priority"
                  id="media"
                  className="accent-custom-purple-hover"
                  checked={priority === "media"}
                  value="media"
                  onChange={handleInputChange}
                />
              </div>
              <div className="input flex items-center gap-2">
                <label htmlFor="alta">Alta:</label>
                <input
                  type="radio"
                  name="priority"
                  id="alta"
                  className="accent-custom-purple-hover"
                  checked={priority === "alta"}
                  value="alta"
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
          <div className="flex gap-4 w-full">
            <button
              className="send bg-custom-purple-hover flex-1 px-5 py-3 text-lg rounded-md hover:scale-95 hover:bg-custom-purple-hover transition-all"
              type="submit"
            >
              Enviar
            </button>
            {openModalEditTodo && (
              <button
                onClick={() => {
                  handleDeleteTodo(currentTodoEditId);
                }}
                className="delete bg-custom-purple flex-1 px-5 py-3 text-lg rounded-md hover:scale-95 transition-all"
                type="button"
              >
                Apagar
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
