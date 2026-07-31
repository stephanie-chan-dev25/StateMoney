import type { Transaction } from "../types/transaction"

export function calculateExpensesByCategory(transactions: Transaction[]) {
  const expensesByCategory = new Map<string, number>()

  transactions
    .filter((transaction) => transaction.type === "expense")
    .forEach((transaction) => {
      const currentAmount =
        expensesByCategory.get(transaction.category) ?? 0

      expensesByCategory.set(
        transaction.category,
        currentAmount + transaction.amount
      )
    })

  return Array.from(expensesByCategory.entries()).map(([category, amount]) => ({
    category,
    amount,
  }))
}