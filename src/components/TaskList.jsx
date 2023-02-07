import { useContext } from "react";
import { Context } from "../context/Context";
import { TaskCard } from "./TaskCard";

export function TaskList() {
  const { tasks, deleteTask } = useContext(Context);

  if (tasks.length === 0) {
    return <h1 className="text-white text-4xl font-bold text-center mt-3">No hay tareas aún</h1>;
  }

  return (
    <div className="grid grid-cols-4 gap-2">
      {tasks.map((task, i) => (
        <TaskCard key={i} task={task} />
      ))}
    </div>
  );
}
