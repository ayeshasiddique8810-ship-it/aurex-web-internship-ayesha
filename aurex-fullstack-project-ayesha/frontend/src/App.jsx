import React from "react";
import { useState, useEffect } from "react";
import { apiRequest } from "./api.js";

export default function App() {
  const [token, setToken] = useState(() => localStorage.getItem("aurexToken") || "");
  const [user, setUser] = useState(() => {
    try { return JSON.parse(localStorage.getItem("aurexUser") || "null"); }
    catch { return null; }
  });
  const [mode, setMode] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const totalTasks = tasks.length;
const completedTasks = tasks.filter(task => task.completed).length;
const pendingTasks = totalTasks - completedTasks;

const completionRate = totalTasks === 0
  ? 0
  : Math.round((completedTasks / totalTasks) * 100);

  async function loadTasks() {
    setLoading(true);
    setMessage("");
    try {
      const data = await apiRequest("/tasks");
      setTasks(data.tasks || []);
    } catch (error) {
      setMessage(error.message);
      if (/token|authoriz/i.test(error.message)) logout();
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (token) loadTasks();
  }, [token]);

  async function handleAuth(event) {
    event.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      const path = mode === "register" ? "/auth/register" : "/auth/login";
      const body = mode === "register" ? { name, email, password } : { email, password };
      const data = await apiRequest(path, { method: "POST", body: JSON.stringify(body) });
      localStorage.setItem("aurexToken", data.token);
      localStorage.setItem("aurexUser", JSON.stringify(data.user));
      setToken(data.token);
      setUser(data.user);
      setPassword("");
    } catch (error) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  }

  function logout() {
    localStorage.removeItem("aurexToken");
    localStorage.removeItem("aurexUser");
    setToken("");
    setUser(null);
    setTasks([]);
    setMessage("You have logged out.");
  }

  async function addTask(event) {
    event.preventDefault();
    if (!newTask.trim()) return;
    setLoading(true);
    setMessage("");
    try {
      await apiRequest("/tasks", {
        method: "POST",
        body: JSON.stringify({ title: newTask.trim() })
      });
      setNewTask("");
      await loadTasks();
    } catch (error) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  }

  async function toggleTask(task) {
    try {
      await apiRequest(`/tasks/${task._id}`, {
        method: "PATCH",
        body: JSON.stringify({ completed: !task.completed })
      });
      await loadTasks();
    } catch (error) { setMessage(error.message); }
  }

  async function deleteTask(id) {
    try {
      await apiRequest(`/tasks/${id}`, { method: "DELETE" });
      await loadTasks();
    } catch (error) { setMessage(error.message); }
  }

  return (
    <main className="page-shell">
      <header className="topbar">
        <div className="brand-mark">T</div>
        <div>
          <p className="eyebrow">AUREX · MONTH 2 · WEEK 04</p>
          <h1>TASKELLE</h1>
        </div>
        {token && <button className="button button-quiet logout" onClick={logout}>Log out</button>}
      </header>

      {!token ? (
        <section className="auth-card">
          <p className="eyebrow">YOUR PERSONAL WORKSPACE</p>
          <h2>{mode === "login" ? "Welcome back" : "Create your account"}</h2>
          <p className="muted">Sign in to manage your tasks securely.</p>
          <form onSubmit={handleAuth} className="stack">
            {mode === "register" && (
              <label>Full name
                <input value={name} onChange={e => setName(e.target.value)} required minLength="2" placeholder="Your name" />
              </label>
            )}
            <label>Email address
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} required placeholder="you@example.com" />
            </label>
            <label>Password
              <input type="password" value={password} onChange={e => setPassword(e.target.value)} required minLength="8" placeholder="At least 8 characters" />
            </label>
            {message && <p className="notice" role="alert">{message}</p>}
            <button className="button button-primary" disabled={loading}>
              {loading ? "Please wait…" : mode === "login" ? "Sign in" : "Create account"}
            </button>
          </form>
          <p className="switch-line">
            {mode === "login" ? "New here?" : "Already have an account?"}
            <button className="text-button" onClick={() => { setMode(mode === "login" ? "register" : "login"); setMessage(""); }}>
              {mode === "login" ? "Create an account" : "Sign in"}
            </button>
          </p>
        </section>
      ) : (
        <section className="dashboard">
          <div className="welcome-row">
            <div>
              <p className="eyebrow">YOUR DASHBOARD</p>
              <h2>Hello{user?.name ? `, ${user.name}` : ""}.</h2>
              <p className="muted">Small steps make meaningful progress.</p>
            </div>
            <div className="task-stat"><strong>{tasks.length}</strong><span>tasks</span></div>
          </div>
          <div className="smart-insights">
  <div className="insights-heading">
    <div className="insights-icon">✧</div>
    <div>
      <h3>Smart Insights</h3>
      <p>A clear view of your productivity</p>
    </div>
  </div>

  <div className="insights-grid">
    <div className="insight-item">
      <strong>{totalTasks}</strong>
      <span>Total Tasks</span>
    </div>

    <div className="insight-item">
      <strong>{completedTasks}</strong>
      <span>Completed</span>
    </div>

    <div className="insight-item">
      <strong>{pendingTasks}</strong>
      <span>Pending</span>
    </div>

    <div className="insight-item">
      <strong>{completionRate}%</strong>
      <span>Progress</span>
    </div>
  </div>

  <div
    className="insights-progress"
    role="progressbar"
    aria-valuenow={completionRate}
    aria-valuemin="0"
    aria-valuemax="100"
    aria-label="Task completion progress"
  >
    <div
      className="insights-progress-fill"
      style={{ width: `${completionRate}%` }}
    />
  </div>

  <p className="insights-caption">
    {totalTasks === 0
      ? "Add your first task to start tracking progress."
      : `${completionRate}% of your tasks completed.`}
  </p>
</div>
          <form className="add-task" onSubmit={addTask}>
            <input value={newTask} onChange={e => setNewTask(e.target.value)} placeholder="What would you like to get done?" maxLength="160" required />
            <button className="button button-primary" disabled={loading}>Add task</button>
          </form>
          {message && <p className="notice" role="alert">{message}</p>}
          {loading && <p className="muted">Loading your tasks…</p>}
          {!loading && tasks.length === 0 && <div className="empty-state"><span>✦</span><h3>A fresh start</h3><p>Your task list is empty. Add your first task above.</p></div>}
          <div className="task-list">
            {tasks.map(task => (
              <article className={`task-row ${task.completed ? "is-complete" : ""}`} key={task._id}>
                <label className="task-label">
                  <input type="checkbox" checked={task.completed} onChange={() => toggleTask(task)} />
                  <span>{task.title}</span>
                </label>
                <button className="delete-button" onClick={() => deleteTask(task._id)} aria-label={`Delete ${task.title}`}>Delete</button>
              </article>
            ))}
          </div>
        </section>
      )}
      <footer>Built with React, Express and MongoDB · AUREX Full Stack Internship</footer>
    </main>
  );
}
