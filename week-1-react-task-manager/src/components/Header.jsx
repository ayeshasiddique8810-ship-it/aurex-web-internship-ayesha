function Header({ activeTaskCount }) {
  return (
    <header className="header">
      <div className="header-content">
        <p className="eyebrow">AUREX · WEEK 05</p>

        <h1>Task Manager</h1>

        <p className="subtitle">
          Organize your tasks, track your progress, and stay productive.
        </p>
      </div>

      <div className="task-count">
        <span>{activeTaskCount}</span>
        <span>active {activeTaskCount === 1 ? "task" : "tasks"}</span>
      </div>
    </header>
  );
}

export default Header;