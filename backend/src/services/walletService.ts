import {
  findAllWallets,
  createWallet,
  updateWallet,
  deleteWallet,
} from "../repositories/walletRepository"

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