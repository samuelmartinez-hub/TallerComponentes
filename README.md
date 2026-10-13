# Lista de Tareas

Aplicación web para organizar tareas pendientes: permite agregar, marcar como completadas y eliminar tareas, con un diseño minimalista en tonos mate y sombras suaves.

## Autor

- **Nombre:** Samuel Martínez Bayona
- **Código:** 0192703

## Tecnologías

- [React 19](https://react.dev/): biblioteca para construir la interfaz
- [Vite](https://vite.dev/): herramienta de desarrollo y empaquetado
- CSS puro: estilos propios, sin librerías de componentes
- ESLint: revisión de calidad del código

## ¿Por qué React 19?

Elegí React 19 porque incorpora funciones que simplifican tareas comunes y que se aplican directamente en este proyecto:

- **`useActionState`**: el formulario (`TaskForm`) maneja su validación, el mensaje de error y el estado de envío sin necesidad de `onSubmit` ni de varios `useState`.
- **Etiquetas de documento dentro de componentes**: el `<title>` de la página se declara directamente en `App.jsx`, sin librerías externas.
- **Mejor soporte para formularios**: el atributo `action` de `<form>` recibe una función, lo que hace el código más corto y legible.

## Componentes creados

| Componente | Archivo | Función |
|---|---|---|
| `TaskForm` | `src/components/TaskForm.jsx` | Formulario para agregar tareas, con validación de texto vacío mediante `useActionState`. |
| `TaskItem` | `src/components/TaskItem.jsx` | Muestra una tarea con su casilla de completado y su botón de eliminar. |
| `TaskList` | `src/components/TaskList.jsx` | Recorre la lista de tareas y muestra un mensaje cuando no hay ninguna. |

El estado de las tareas vive en `App.jsx` y se comparte con los componentes mediante *props*.

## Estructura del proyecto

```
mi-app/
├── src/
│   ├── components/
│   │   ├── TaskForm.jsx
│   │   ├── TaskItem.jsx
│   │   └── TaskList.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── README.md
```

## Instalación y uso

Requisitos: Node.js 20.19 o superior y Git.

```bash
git clone https://github.com/samuelmartinez-hub/lista-de-tareas.git
cd lista-de-tareas
npm install
npm run dev
```

Luego abre `http://localhost:5173/` en el navegador.

## Lo que aprendí de la documentación

Leí la documentación oficial en [react.dev](https://react.dev/) y estos fueron los conceptos que apliqué:

- **Componentes y props**: dividir la interfaz en piezas reutilizables que reciben datos desde el componente padre.
- **Estado con `useState`**: guardar la lista de tareas y