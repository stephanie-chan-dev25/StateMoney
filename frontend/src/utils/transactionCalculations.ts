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

export function calculateIncome(transactions: Transaction[]) {
  return transactions
    .filter((transaction) => transaction.type === "income")
    .reduce((total, transaction) => total + transaction.amount, 0)
}

export function calculateExpenses(transactions: Transaction[]) {
  return transactions
    .filter((transaction) => transaction.type === "expense")
    .reduce((total, transaction) => total + transaction.amount, 0)
}

export function calculateSavings(income: number, expenses: number) {
  return income - expenses
}

export function calculateBalance(transactions: Transaction[]) {
  return transactions.reduce((total, transaction) => {
    return transaction.type === "income"
      ? total + transaction.amount
      : total - transaction.amount
  }, 0)
}

