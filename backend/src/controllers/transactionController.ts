import type { Request, Response } from "express"
import { 
  getAllTransactions,
  editTransaction,
  addTransaction,
  removeTransaction
 } from "../services/transactionService"


export async function updateTransactionController(
  req: Request,
  res: Response
) {
  const id = Number(req.params.id)

  const transaction =
    await editTransaction(id, req.body)

  res.json(transaction)
}

export async function deleteTransactionController(
  req: Request,
  res: Response
) {
  const id = Number(req.params.id)

  await removeTransaction(id)

  res.sendStatus(204)
}
export async function createTransactionController(
  req: Request,
  res: Response
) {
  const transaction = await addTransaction(req.body)

  res.status(201).json(transaction)
}
export async function getTransactions(
  _req: Request,
  res: Response
) {
  const transactions = await getAllTransactions()

  res.json(transactions)
}