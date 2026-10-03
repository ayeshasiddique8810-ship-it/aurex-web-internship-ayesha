import { useState } from "react";

function TaskItem({
  task,
  onToggleTask,
  onDeleteTask,
  onEditTask,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSave = () => {
    const newText = editText.trim();

    if (!newText) {
      setErrorMessage("Task cannot be empty.");
      return;
    }

    if (newText.length < 3) {
      setErrorMessage("Task must be at least 3 characters.");
      return;
    }

    onEditTask(task.id, newText);
    setIsEditing(false);
    setErrorMessage("");
  };

  const handleCancel = () => {
    setEditText(task.text);
    setErrorMessage("");
    setIsEditing(false);
  };

  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      {isEditing ? (
        <div className="edit-container">
          <input
            type="text"
            value={editText}
            onChange={(event) => {
              setEditText(event.target.value);
              setErrorMessage("");
            }}
          />

          <div className="edit-actions">
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
          </div>

          {errorMessage && (
            <p className="error-message">{errorMessage}</p>
          )}
        </div>
      ) : (
        <>
          <div className="task-content">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggleTask(task.id)}
            />

            <span>{task.text}</span>
          </div>

          <div className="task-actions">
            <button
              className="edit-button"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>

            <button
              className="delete-button"
              onClick={() => onDeleteTask(task.id)}
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default TaskItem;