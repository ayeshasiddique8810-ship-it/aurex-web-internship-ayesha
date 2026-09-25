const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const emptyState = document.getElementById("emptyState");
const errorMessage = document.getElementById("errorMessage");
const taskCount = document.getElementById("taskCount");
const filterButtons = document.querySelectorAll(".filter-btn");

let tasks = JSON.parse(localStorage.getItem("aurexTasks")) || [];
let currentFilter = "all";

function saveTasks() {
    localStorage.setItem("aurexTasks", JSON.stringify(tasks));
}

function renderTasks() {
    taskList.innerHTML = "";

    let filteredTasks = tasks;

    if (currentFilter === "active") {
        filteredTasks = tasks.filter(function(task) {
            return !task.completed;
        });
    }

    if (currentFilter === "completed") {
        filteredTasks = tasks.filter(function(task) {
            return task.completed;
        });
    }

    emptyState.style.display =
        filteredTasks.length === 0 ? "block" : "none";

    filteredTasks.forEach(function(task) {
        taskList.appendChild(createTaskElement(task));
    });

    updateTaskCount();
}

function createTaskElement(task) {
    const taskItem = document.createElement("div");
    taskItem.classList.add("task-item");

    if (task.completed) {
        taskItem.classList.add("completed");
    }

    const completeButton = document.createElement("button");
    completeButton.classList.add("complete-btn");
    completeButton.textContent = task.completed ? "✓" : "";

    completeButton.addEventListener("click", function() {
        toggleTask(task.id);
    });

    const taskText = document.createElement("span");
    taskText.classList.add("task-text");
    taskText.textContent = task.text;

    const actions = document.createElement("div");
    actions.classList.add("task-actions");

    const editButton = document.createElement("button");
    editButton.classList.add("action-btn");
    editButton.textContent = "Edit";

    editButton.addEventListener("click", function() {
        startEditing(task, taskItem);
    });

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("action-btn");
    deleteButton.classList.add("delete-btn");
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", function() {
        deleteTask(task.id);
    });

    actions.appendChild(editButton);
    actions.appendChild(deleteButton);

    taskItem.appendChild(completeButton);
    taskItem.appendChild(taskText);
    taskItem.appendChild(actions);

    return taskItem;
}

function startEditing(task, taskItem) {
    const textInput = document.createElement("input");
    textInput.type = "text";
    textInput.value = task.text;
    textInput.classList.add("edit-input");

    const saveButton = document.createElement("button");
    saveButton.classList.add("action-btn");
    saveButton.textContent = "Save";

    const cancelButton = document.createElement("button");
    cancelButton.classList.add("action-btn");
    cancelButton.textContent = "Cancel";

    const editActions = document.createElement("div");
    editActions.classList.add("task-actions");

    editActions.appendChild(saveButton);
    editActions.appendChild(cancelButton);

    const taskText = taskItem.querySelector(".task-text");
    const actions = taskItem.querySelector(".task-actions");

    taskText.replaceWith(textInput);
    actions.replaceWith(editActions);

    textInput.focus();

    saveButton.addEventListener("click", function() {
        const updatedText = textInput.value.trim();

        if (updatedText === "") {
            alert("Task cannot be empty.");
            return;
        }

        if (updatedText.length < 3) {
            alert("Task must contain at least 3 characters.");
            return;
        }

        task.text = updatedText;

        saveTasks();
        renderTasks();
    });

    cancelButton.addEventListener("click", function() {
        renderTasks();
    });
}

taskForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const text = taskInput.value.trim();

    if (text === "") {
        errorMessage.textContent = "Please enter a task.";
        taskInput.focus();
        return;
    }

    if (text.length < 3) {
        errorMessage.textContent =
            "Task must contain at least 3 characters.";
        taskInput.focus();
        return;
    }

    errorMessage.textContent = "";

    const newTask = {
        id: Date.now(),
        text: text,
        completed: false
    };

    tasks.push(newTask);

    saveTasks();

    taskInput.value = "";

    renderTasks();

    taskInput.focus();
});

function toggleTask(id) {
    tasks = tasks.map(function(task) {
        if (task.id === id) {
            return {
                ...task,
                completed: !task.completed
            };
        }

        return task;
    });

    saveTasks();
    renderTasks();
}

function deleteTask(id) {
    tasks = tasks.filter(function(task) {
        return task.id !== id;
    });

    saveTasks();
    renderTasks();
}

filterButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        filterButtons.forEach(function(item) {
            item.classList.remove("active");
        });

        button.classList.add("active");

        currentFilter = button.dataset.filter;

        renderTasks();
    });
});

taskInput.addEventListener("input", function() {
    if (taskInput.value.trim() !== "") {
        errorMessage.textContent = "";
    }
});

function updateTaskCount() {
    const activeTasks = tasks.filter(function(task) {
        return !task.completed;
    }).length;

    taskCount.textContent = activeTasks;
}

renderTasks();