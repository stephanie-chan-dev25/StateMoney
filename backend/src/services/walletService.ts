import {
  findAllWallets,
  createWallet,
  updateWallet,
  deleteWallet,
  findWalletByUser,
} from "../repositories/walletRepository"


export async function getWalletByUser(
  walletId: number,
  userId: number
) {
  return await findWalletByUser(
    walletId,
    userId
  )
}


export function getAllWallets(
  userId: number
) {
  return findAllWallets(userId)
}


export function addWallet(
  name: string,
  userId: number
) {
  return createWallet(
    name,
    userId
  )
}


export function editWallet(
  id: number,
  name: string,
  userId: number
) {
  return updateWallet(
    id,
    name,
    userId
  )
}


export function removeWallet(
  id: number,
  userId: number
) {
  return deleteWallet(
    id,
    userId
  )
}