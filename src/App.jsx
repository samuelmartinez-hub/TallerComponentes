import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tareas, setTareas] = useState([]);

  const agregarTarea = (texto) => {
    setTareas((actuales) => [
      { id: crypto.randomUUID(), texto, completada: false },
      ...actuales,
    ]);
  };

  const alternarTarea = (id) => {
    setTareas((actuales) =>
      actuales.map((t) => (t.id === id ? { ...t, completada: !t.completada } : t))
    );
  };

  const eliminarTarea = (id) => {
    setTareas((actuales) => actuales.filter((t) => t.id !== id));
  };

  const completadas = tareas.filter((t) => t.completada).length;

  return (
    <>
      <title>Mi lista de tareas</title>
      <main className="app">
        <header className="app__header">
          <h1>Mi lista de tareas</h1>
          <p>
            {tareas.length === 0
              ? "Todo en orden"
              : `${completadas} de ${tareas.length} completadas`}
          </p>
        </header>

        <TaskForm onAdd={agregarTarea} />
        <TaskList
          tareas={tareas}
          onToggle={alternarTarea}
          onDelete={eliminarTarea}
        />
      </main>
    </>
  );
}

export default App;