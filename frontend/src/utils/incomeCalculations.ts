import type { Transaction } from "../types/transaction"

export function calculateIncomeByCategory(transactions: Transaction[]) {
  const incomeByCategory = new Map<string, number>()

  transactions
    .filter((transaction) => transaction.type === "income")
    .forEach((transaction) => {
      const currentAmount =
        incomeByCategory.get(transaction.category) ?? 0

      incomeByCategory.set(
        transaction.category,
        currentAmount + transaction.amount
      )
    })

  return Array.from(incomeByCategory.entries()).map(([category, amount]) => ({
    category,
    amount,
  }))
}