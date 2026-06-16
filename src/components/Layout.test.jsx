import { render, screen, within } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, expect, it } from "vitest";
import Layout from "./Layout";

function renderLayout(initialPath = "/") {
  return render(
    <MemoryRouter initialEntries={[initialPath]}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<p>Contenu page</p>} />
          <Route path="/contact" element={<p>Page contact</p>} />
        </Route>
      </Routes>
    </MemoryRouter>
  );
}

describe("<Layout />", () => {
  it("affiche tous les liens de navigation", () => {
    renderLayout();
    const nav = screen.getByRole("navigation");
    const labels = [
      "Accueil",
      "Travaux",
      "Services",
      "Équipe",
      "FAQ",
      "À propos",
      "Contact",
    ];
    for (const label of labels) {
      expect(within(nav).getByRole("link", { name: label })).toBeInTheDocument();
    }
  });

  it("rend le contenu de la route enfant via l'Outlet", () => {
    renderLayout("/");
    expect(screen.getByText("Contenu page")).toBeInTheDocument();
  });

  it("affiche le pied de page", () => {
    renderLayout();
    expect(screen.getByText(/CESI INF83/)).toBeInTheDocument();
  });
});
