import { renderHook, waitFor } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { useResource } from "./useResource";

describe("useResource", () => {
  it("démarre en chargement avec un tableau vide", () => {
    const loader = vi.fn(() => new Promise(() => {})); // jamais résolu
    const { result } = renderHook(() => useResource(loader));

    expect(result.current.loading).toBe(true);
    expect(result.current.data).toEqual([]);
    expect(result.current.error).toBeNull();
  });

  it("expose les données quand le loader réussit", async () => {
    const data = [{ id: 1 }, { id: 2 }];
    const loader = vi.fn().mockResolvedValue(data);
    const { result } = renderHook(() => useResource(loader));

    await waitFor(() => expect(result.current.loading).toBe(false));

    expect(result.current.data).toEqual(data);
    expect(result.current.error).toBeNull();
  });

  it("expose le message d'erreur quand le loader échoue", async () => {
    const loader = vi.fn().mockRejectedValue(new Error("Boum"));
    const { result } = renderHook(() => useResource(loader));

    await waitFor(() => expect(result.current.loading).toBe(false));

    expect(result.current.error).toBe("Boum");
    expect(result.current.data).toEqual([]);
  });

  it("n'applique pas le résultat après démontage (pas de fuite d'état)", async () => {
    let resolve;
    const loader = vi.fn(() => new Promise((r) => (resolve = r)));
    const { result, unmount } = renderHook(() => useResource(loader));

    unmount();
    resolve([{ id: 1 }]);

    // Le state ne doit pas avoir été mis à jour après démontage.
    expect(result.current.data).toEqual([]);
  });
});
