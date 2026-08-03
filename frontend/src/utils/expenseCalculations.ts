import type { Category } from "../types/category"
import type { Transaction } from "../types/transaction"

export function calculateExpensesByCategory(
  transactions: Transaction[],
  categories: Category[]
) {
  const expensesByCategory = new Map<string, number>()

  transactions.forEach((transaction) => {
    const category = categories.find(
      (category) => category.id === transaction.categoryId
    )

    if (category?.type !== "expense") {
      return
    }

    const currentAmount =
      expensesByCategory.get(category.name) ?? 0

    expensesByCategory.set(
      category.name,
      currentAmount + transaction.amount
    )
  })

  return Array.from(expensesByCategory.entries()).map(
    ([category, amount]) => ({
      category,
      amount,
    })
  )
}