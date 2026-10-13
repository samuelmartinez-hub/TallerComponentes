function TaskItem({ tarea, onToggle, onDelete }) {
  return (
    <li className={`task-item ${tarea.completada ? "task-item--done" : ""}`}>
      <label className="task-item__label">
        <input
          type="checkbox"
          checked={tarea.completada}
          onChange={() => onToggle(tarea.id)}
        />
        <span>{tarea.texto}</span>
      </label>
      <button
        className="task-item__delete"
        onClick={() => onDelete(tarea.id)}
        aria-label={`Eliminar ${tarea.texto}`}
      >
        ✕
      </button>
    </li>
  );
}

export default TaskItem;