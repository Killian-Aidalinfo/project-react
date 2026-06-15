import { NavLink, Outlet } from "react-router-dom";

const links = [
  { to: "/", label: "Accueil", end: true },
  { to: "/travaux", label: "Travaux" },
  { to: "/services", label: "Services" },
  { to: "/equipe", label: "Équipe" },
  { to: "/faq", label: "FAQ" },
  { to: "/a-propos", label: "À propos" },
  { to: "/contact", label: "Contact" },
];

export default function Layout() {
  return (
    <div className="site">
      <header className="topbar">
        <div className="shell topbar__inner">
          <NavLink to="/" className="brand">
            <span className="brand__dot" />
            Atelier
            <span className="brand__no">/ react</span>
          </NavLink>
          <nav className="nav">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} end={l.end}>
                {l.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className="page">
        <div className="shell">
          <Outlet />
        </div>
      </main>

      <footer className="footer">
        <div className="shell footer__inner">
          <span>© 2026 Atelier — CESI INF83</span>
          <span>Construit avec React + Vite</span>
        </div>
      </footer>
    </div>
  );
}
