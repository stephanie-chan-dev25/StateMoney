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
    const wallets = await getAllWallets(
      req.user!.id
    )

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

    if (
      typeof name !== "string" ||
      !name.trim()
    ) {
      res.status(400).json({
        message: "Nom du portefeuille obligatoire",
      })

      return
    }

    const wallet = await addWallet(
      name.trim(),
      req.user!.id
    )

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

    if (
      !Number.isInteger(id) ||
      typeof name !== "string" ||
      !name.trim()
    ) {
      res.status(400).json({
        message: "Données wallet invalides",
      })

      return
    }

    const wallet = await editWallet(
      id,
      name.trim(),
      req.user!.id
    )

    if (!wallet) {
      res.status(403).json({
        message: "Ce portefeuille ne vous appartient pas",
      })

      return
    }

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

    if (!Number.isInteger(id)) {
      res.status(400).json({
        message: "Identifiant wallet invalide",
      })

      return
    }

    const wallet = await getAllWallets(
      req.user!.id
    )

    const walletExists = wallet.some(
      (item) => item.id === id
    )

    if (!walletExists) {
      res.status(403).json({
        message: "Ce portefeuille ne vous appartient pas",
      })

      return
    }

    await removeWallet(
      id,
      req.user!.id
    )

    res.status(204).send()
  } catch (error) {
    console.error(error)

    res.status(500).json({
      message: "Erreur suppression wallet",
    })
  }
}