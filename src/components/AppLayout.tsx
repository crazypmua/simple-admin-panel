import { Link, Outlet } from "@tanstack/react-router";
import type { ReactNode } from "react";

const nav = [
  { to: "/", label: "Дашборд" },
  { to: "/merchants", label: "Мерчантс" },
  { to: "/broadcast", label: "Рассылка" },
  { to: "/links", label: "Связки мерчантов" },
  { to: "/managers", label: "Менеджеры" },
] as const;

export function AppLayout({ title, children }: { title: string; children?: ReactNode }) {
  return (
    <div className="app">
      <aside className="sidebar">
        <div className="brand">DalaPay</div>
        <nav className="nav">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="nav-link"
              activeOptions={{ exact: n.to === "/" }}
              activeProps={{ className: "nav-link active" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
      </aside>
      <main className="main">
        <h1 className="page-title">{title}</h1>
        {children ?? <Outlet />}
      </main>
    </div>
  );
}
