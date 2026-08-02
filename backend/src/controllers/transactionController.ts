import type { Request, Response } from "express"
import { getAllTransactions } from "../services/transactionService"

export function getTransactions(
  req: Request,
  res: Response
) {
  const transactions = getAllTransactions()

  res.json(transactions)
}