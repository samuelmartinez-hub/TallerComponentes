import { useActionState } from "react";

function TaskForm({ onAdd }) {
  const [error, submitAction, isPending] = useActionState(
    (_estadoPrevio, formData) => {
      const texto = formData.get("tarea").trim();

      if (!texto) {
        return "Escribe una tarea antes de agregar.";
      }

      onAdd(texto);
      return null;
    },
    null
  );

  return (
    <form action={submitAction} className="task-form">
      <div className="task-form__row">
        <input
          type="text"
          name="tarea"
          placeholder="¿Qué tienes pendiente?"
          autoComplete="off"
        />
        <button type="submit" disabled={isPending}>
          Agregar
        </button>
      </div>
      {error && <p className="task-form__error">{error}</p>}
    </form>
  );
}

export default TaskForm;