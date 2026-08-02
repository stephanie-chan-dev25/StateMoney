import type { Transaction } from "../types/transaction"

export function findAllTransactions(): Transaction[] {
  return [
    {
      id: 1,
      amount: 2000000,
      date: new Date(),
      type: "income",
      categoryId: 1,
      walletId: 2,
      description: "Salaire août",
    },
  ]
}