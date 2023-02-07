import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";

export const Context = createContext();

export function ContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  function createTask({ taskTitle, taskDescription }) {
    setTasks([
      ...tasks,
      {
        title: taskTitle,
        id: tasks.length,
        description: taskDescription,
      },
    ]);
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <Context.Provider
      value={{
        tasks,
        deleteTask,
        createTask,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
