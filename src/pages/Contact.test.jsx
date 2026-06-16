import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import Contact from "./Contact";
import { sendContact } from "../api";

vi.mock("../api", () => ({
  sendContact: vi.fn(),
}));

describe("<Contact />", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  async function fillForm(user) {
    await user.type(screen.getByLabelText("Nom"), "Alice");
    await user.type(screen.getByLabelText("Email"), "alice@exemple.fr");
    await user.type(screen.getByLabelText("Message"), "Bonjour !");
  }

  it("affiche le formulaire", () => {
    render(<Contact />);
    expect(screen.getByLabelText("Nom")).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Message")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Envoyer" })).toBeInTheDocument();
  });

  it("envoie le payload et affiche le message de succès", async () => {
    sendContact.mockResolvedValue({ ok: true });
    const user = userEvent.setup();
    render(<Contact />);

    await fillForm(user);
    await user.click(screen.getByRole("button", { name: "Envoyer" }));

    await waitFor(() =>
      expect(sendContact).toHaveBeenCalledWith({
        nom: "Alice",
        email: "alice@exemple.fr",
        message: "Bonjour !",
      })
    );
    expect(
      await screen.findByText(/Merci ! Votre message a bien été pris en compte/)
    ).toBeInTheDocument();
  });

  it("affiche le message d'erreur si l'envoi échoue", async () => {
    sendContact.mockRejectedValue(new Error("Serveur indisponible"));
    const user = userEvent.setup();
    render(<Contact />);

    await fillForm(user);
    await user.click(screen.getByRole("button", { name: "Envoyer" }));

    expect(await screen.findByText(/Serveur indisponible/)).toBeInTheDocument();
  });
});
