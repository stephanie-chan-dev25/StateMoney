import type { Request, Response } from "express"
import { 
  getAllTransactions,
  editTransaction,
  addTransaction,
  removeTransaction,
  getTransactionByUser
 } from "../services/transactionService"
import { getWalletByUser } from "../services/walletService"

export async function updateTransactionController(
  req: Request,
  res: Response
) {
  const id = Number(req.params.id)

  const existingTransaction =
    await getTransactionByUser(
      id,
      req.user!.id
    )

  if (!existingTransaction) {
    res.status(403).json({
      message: "Cette transaction ne vous appartient pas",
    })
    return
  }

  const transaction =
    await editTransaction(id, req.body)

  res.json(transaction)
}

export async function deleteTransactionController(
  req: Request,
  res: Response
) {
  const id = Number(req.params.id)

  const existingTransaction =
    await getTransactionByUser(
      id,
      req.user!.id
    )

  if (!existingTransaction) {
    res.status(403).json({
      message: "Cette transaction ne vous appartient pas",
    })
    return
  }

  await removeTransaction(id)

  res.sendStatus(204)
}
export async function createTransactionController(
  req: Request,
  res: Response
) {
  const wallet = await getWalletByUser(
    req.body.walletId,
    req.user!.id
  )
  
  if (!wallet) {
    res.status(403).json({
      message: "Ce portefeuille ne vous appartient pas",
    })
  
    return
  }
  
  const transaction = await addTransaction(req.body)
  
  res.status(201).json(transaction)
}
export async function getTransactions(
  req: Request,
  res: Response
) {
  const transactions = await getAllTransactions(req.user!.id)

  res.json(transactions)
}