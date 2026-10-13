import TaskItem from "./TaskItem";

function TaskList({ tareas, onToggle, onDelete }) {
  if (tareas.length === 0) {
    return <p className="task-list__empty">No hay tareas por ahora. ¡Agrega la primera!</p>;
  }

  return (
    <ul className="task-list">
      {tareas.map((tarea) => (
        <TaskItem
          key={tarea.id}
          tarea={tarea}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default TaskList;