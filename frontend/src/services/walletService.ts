import type { Wallet } from "../types/wallet"

const API_URL = "http://localhost:3000/wallets"

export async function getWallets(): Promise<Wallet[]> {
  const response = await fetch(API_URL)

  if (!response.ok) {
    throw new Error("Erreur récupération wallets")
  }

  return response.json()
}