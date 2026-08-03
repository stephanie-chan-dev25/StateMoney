import type { Category } from "../types/category"
import type { Transaction } from "../types/transaction"

export function filterTransactionsByMonth(
  transactions: Transaction[],
  month: number,
  year: number
) {
  return transactions.filter((transaction) => {
    const transactionDate = transaction.date

    return (
      transactionDate.getMonth() === month &&
      transactionDate.getFullYear() === year
    )
  })
}

function getCategoryType(
  transaction: Transaction,
  categories: Category[]
) {
  return categories.find(
    (category) => category.id === transaction.categoryId
  )?.type
}

export function calculateIncome(
  transactions: Transaction[],
  categories: Category[]
) {
  return transactions
    .filter(
      (transaction) =>
        getCategoryType(transaction, categories) === "income"
    )
    .reduce((total, transaction) => total + transaction.amount, 0)
}

export function calculateExpenses(
  transactions: Transaction[],
  categories: Category[]
) {
  return transactions
    .filter(
      (transaction) =>
        getCategoryType(transaction, categories) === "expense"
    )
    .reduce((total, transaction) => total + transaction.amount, 0)
}

export function calculateSavings(
  income: number,
  expenses: number
) {
  return income - expenses
}

export function calculateBalance(
  transactions: Transaction[],
  categories: Category[]
) {
  return transactions.reduce((total, transaction) => {
    return getCategoryType(transaction, categories) === "income"
      ? total + transaction.amount
      : total - transaction.amount
  }, 0)
}