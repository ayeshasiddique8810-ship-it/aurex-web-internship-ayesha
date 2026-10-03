import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("aurexTasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [currentFilter, setCurrentFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("aurexTasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };

    setTasks((previousTasks) => [...previousTasks, newTask]);
  };

  const toggleTask = (id) => {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((previousTasks) =>
      previousTasks.filter((task) => task.id !== id)
    );
  };

  const editTask = (id, newText) => {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === id
          ? { ...task, text: newText }
          : task
      )
    );
  };

  const filteredTasks = tasks.filter((task) => {
    if (currentFilter === "active") {
      return !task.completed;
    }

    if (currentFilter === "completed") {
      return task.completed;
    }

    return true;
  });

  const activeTaskCount = tasks.filter(
    (task) => !task.completed
  ).length;

  return (
    <div className="app">
      <div className="container">

        <Header activeTaskCount={activeTaskCount} />

        <TaskForm onAddTask={addTask} />

        <div className="filters">
          <button
            className={currentFilter === "all" ? "active" : ""}
            onClick={() => setCurrentFilter("all")}
          >
            All
          </button>

          <button
            className={currentFilter === "active" ? "active" : ""}
            onClick={() => setCurrentFilter("active")}
          >
            Active
          </button>

          <button
            className={currentFilter === "completed" ? "active" : ""}
            onClick={() => setCurrentFilter("completed")}
          >
            Completed
          </button>
        </div>

        <TaskList
          tasks={filteredTasks}
          onToggleTask={toggleTask}
          onDeleteTask={deleteTask}
          onEditTask={editTask}
        />

      </div>
    </div>
  );
}

export default App;