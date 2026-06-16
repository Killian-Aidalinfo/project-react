import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import Equipe from "./Equipe";
import { getTeam } from "../api";

vi.mock("../api", () => ({
  getTeam: vi.fn(),
}));

describe("<Equipe />", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("affiche l'état de chargement initial", () => {
    getTeam.mockReturnValue(new Promise(() => {})); // jamais résolu
    render(<Equipe />);
    expect(screen.getByText("Chargement…")).toBeInTheDocument();
  });

  it("affiche les membres une fois chargés", async () => {
    getTeam.mockResolvedValue([
      { id: 1, nom: "Alice", role: "Designer", initiales: "AL" },
      { id: 2, nom: "Bob", role: "Dev", initiales: "BO" },
    ]);
    render(<Equipe />);

    expect(await screen.findByText("Alice")).toBeInTheDocument();
    expect(screen.getByText("Designer")).toBeInTheDocument();
    expect(screen.getByText("Bob")).toBeInTheDocument();
    expect(screen.getByText("BO")).toBeInTheDocument();
  });

  it("affiche un message d'erreur si le chargement échoue", async () => {
    getTeam.mockRejectedValue(new Error("API down"));
    render(<Equipe />);

    expect(
      await screen.findByText(/Impossible de charger l'équipe : API down/)
    ).toBeInTheDocument();
  });
});
