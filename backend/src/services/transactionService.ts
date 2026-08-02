import { findAllTransactions } from "../repositories/transactionRepository"

export function getAllTransactions() {
  return findAllTransactions()
}