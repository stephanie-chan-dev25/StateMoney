import type { Request, Response } from "express"
import {
  getAllWallets,
  addWallet,
  editWallet,
  removeWallet,
} from "../services/walletService"

export async function getWallets(
  req: Request,
  res: Response
) {
  try {
    const wallets = await getAllWallets()

    res.json(wallets)
  } catch (error) {
    console.error(error)

    res.status(500).json({
      message: "Erreur récupération wallets",
    })
  }
}

export async function createWallet(
  req: Request,
  res: Response
) {
  try {
    const { name } = req.body

    const wallet = await addWallet(name)

    res.status(201).json(wallet)
  } catch (error) {
    console.error(error)

    res.status(500).json({
      message: "Erreur création wallet",
    })
  }
}

export async function updateWallet(
  req: Request,
  res: Response
) {
  try {
    const id = Number(req.params.id)
    const { name } = req.body

    const wallet = await editWallet(id, name)

    res.json(wallet)
  } catch (error) {
    console.error(error)

    res.status(500).json({
      message: "Erreur modification wallet",
    })
  }
}

export async function deleteWallet(
  req: Request,
  res: Response
) {
  try {
    const id = Number(req.params.id)

    await removeWallet(id)

    res.status(204).send()
  } catch (error) {
    console.error(error)

    res.status(500).json({
      message: "Erreur suppression wallet",
    })
  }
}