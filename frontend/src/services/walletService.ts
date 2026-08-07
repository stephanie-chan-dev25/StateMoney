import type { Wallet } from "../types/wallet"
import { apiFetch } from "../utils/api"


const API_URL = "http://localhost:3000/wallets"


export async function getWallets(): Promise<Wallet[]> {
  const response = await apiFetch(API_URL)

  if (!response.ok) {
    throw new Error("Erreur récupération wallets")
  }

  return response.json()
}


export async function createWallet(
  name: string
): Promise<Wallet> {
  const response = await apiFetch(
    API_URL,
    {
      method: "POST",
      body: JSON.stringify({
        name,
      }),
    }
  )

  if (!response.ok) {
    throw new Error("Erreur création wallet")
  }

  return response.json()
}


export async function updateWallet(
  id: number,
  name: string
): Promise<Wallet> {
  const response = await apiFetch(
    `${API_URL}/${id}`,
    {
      method: "PUT",
      body: JSON.stringify({
        name,
      }),
    }
  )

  if (!response.ok) {
    throw new Error("Erreur modification wallet")
  }

  return response.json()
}


export async function deleteWallet(
  id: number
): Promise<void> {
  const response = await apiFetch(
    `${API_URL}/${id}`,
    {
      method: "DELETE",
    }
  )

  if (!response.ok) {
    throw new Error("Erreur suppression wallet")
  }
}