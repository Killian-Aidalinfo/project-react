// Helpers d'accès à l'API « Atelier ».
// La base est configurable via VITE_API_URL ; par défaut on utilise le proxy
// Vite (/api), donc une chaîne vide suffit en développement.
const BASE = import.meta.env.VITE_API_URL ?? "";

async function fetchJson(path, options) {
  const res = await fetch(`${BASE}${path}`, options);
  if (!res.ok) {
    let detail = "";
    try {
      const body = await res.json();
      detail = body?.error ?? "";
    } catch {
      // pas de corps JSON exploitable
    }
    throw new Error(detail || `Erreur ${res.status}`);
  }
  return res.json();
}
export const getTeam = () => fetchJson("/api/team");
export const getServices = () => fetchJson("/api/services");
export const getProjects = () => fetchJson("/api/projects");
export const getFaq = () => fetchJson("/api/faq");

export const sendContact = (payload) =>
  fetchJson("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
