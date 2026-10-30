export default function Header() {
return (
<header className="site-header">
<a className="brand" href="#top" aria-label="AUREX dashboard home">
<span className="brand-mark">A</span>
<span>AUREX</span>
</a>

  <nav className="main-nav" aria-label="Main navigation">
    <a href="#top">Dashboard</a>
    <a href="#records">Records</a>
    <a href="#about">About</a>
  </nav>

  <span className="header-label">API MANAGEMENT</span>
</header>

);
}
