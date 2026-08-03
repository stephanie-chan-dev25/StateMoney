import type { Category } from "../types/category"
import type { Transaction } from "../types/transaction"

export function calculateIncomeByCategory(
  transactions: Transaction[],
  categories: Category[]
) {
  const incomeByCategory = new Map<string, number>()

  transactions.forEach((transaction) => {
    const category = categories.find(
      (category) => category.id === transaction.categoryId
    )

    if (category?.type !== "income") {
      return
    }

    const currentAmount =
      incomeByCategory.get(category.name) ?? 0

    incomeByCategory.set(
      category.name,
      currentAmount + transaction.amount
    )
  })

  return Array.from(incomeByCategory.entries()).map(
    ([category, amount]) => ({
      category,
      amount,
    })
  )
}