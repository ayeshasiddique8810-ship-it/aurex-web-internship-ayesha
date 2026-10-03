import { useState } from "react";

function TaskForm({ onAddTask }) {
  const [taskInput, setTaskInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const taskText = taskInput.trim();

    if (!taskText) {
      setErrorMessage("Please enter a task.");
      return;
    }

    if (taskText.length < 3) {
      setErrorMessage("Task must be at least 3 characters.");
      return;
    }

    onAddTask(taskText);
    setTaskInput("");
    setErrorMessage("");
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <div className="input-wrapper">
        <input
          type="text"
          value={taskInput}
          onChange={(event) => {
            setTaskInput(event.target.value);
            setErrorMessage("");
          }}
          placeholder="What needs to be done?"
        />

        <button type="submit">Add Task</button>
      </div>

      {errorMessage && (
        <p className="error-message">{errorMessage}</p>
      )}
    </form>
  );
}

export default TaskForm;