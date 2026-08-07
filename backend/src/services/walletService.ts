import {
  findAllWallets,
  createWallet,
  updateWallet,
  deleteWallet,
} from "../repositories/walletRepository"

import { findWalletByUser } from "../repositories/walletRepository"

export async function getWalletByUser(
  walletId: number,
  userId: number
) {
  return await findWalletByUser(walletId, userId)
}

export function getAllWallets() {
  return findAllWallets()
}

export function addWallet(name: string) {
  return createWallet(name)
}

export function editWallet(
  id: number,
  name: string
) {
  return updateWallet(id, name)
}

export function removeWallet(id: number) {
  return deleteWallet(id)
}