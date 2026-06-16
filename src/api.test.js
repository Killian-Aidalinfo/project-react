import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  getFaq,
  getProjects,
  getServices,
  getTeam,
  sendContact,
} from "./api";

describe("api", () => {
  beforeEach(() => {
    vi.stubGlobal("fetch", vi.fn());
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  function mockResponse({ ok = true, status = 200, body } = {}) {
    return {
      ok,
      status,
      json: vi.fn().mockResolvedValue(body),
    };
  }

  it("getTeam appelle /api/team et renvoie le JSON", async () => {
    const data = [{ id: 1, nom: "Alice" }];
    fetch.mockResolvedValue(mockResponse({ body: data }));

    const result = await getTeam();

    expect(fetch).toHaveBeenCalledWith("/api/team", undefined);
    expect(result).toEqual(data);
  });

  it("getServices, getProjects et getFaq ciblent les bonnes routes", async () => {
    fetch.mockResolvedValue(mockResponse({ body: [] }));

    await getServices();
    expect(fetch).toHaveBeenLastCalledWith("/api/services", undefined);

    await getProjects();
    expect(fetch).toHaveBeenLastCalledWith("/api/projects", undefined);

    await getFaq();
    expect(fetch).toHaveBeenLastCalledWith("/api/faq", undefined);
  });

  it("sendContact envoie un POST JSON", async () => {
    fetch.mockResolvedValue(mockResponse({ body: { ok: true } }));
    const payload = { nom: "Bob", email: "b@b.fr", message: "Salut" };

    const result = await sendContact(payload);

    expect(fetch).toHaveBeenCalledWith("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    expect(result).toEqual({ ok: true });
  });

  it("remonte le message d'erreur fourni par l'API quand la réponse n'est pas ok", async () => {
    fetch.mockResolvedValue(
      mockResponse({ ok: false, status: 422, body: { error: "Email invalide" } })
    );

    await expect(getTeam()).rejects.toThrow("Email invalide");
  });

  it("retombe sur « Erreur <status> » si le corps n'est pas exploitable", async () => {
    fetch.mockResolvedValue({
      ok: false,
      status: 500,
      json: vi.fn().mockRejectedValue(new Error("not json")),
    });

    await expect(getTeam()).rejects.toThrow("Erreur 500");
  });
});
