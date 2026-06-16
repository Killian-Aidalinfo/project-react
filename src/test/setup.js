// Setup global des tests Vitest.
// Ajoute les matchers de jest-dom (toBeInTheDocument, etc.) et nettoie le DOM
// après chaque test pour éviter les fuites d'état entre les cas.
import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

afterEach(() => {
  cleanup();
});
