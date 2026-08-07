import type { Transaction } from "../types/transaction"
import { apiFetch } from "../utils/api"
export async function updateTransaction(
  transaction: Transaction
) {
  const response = await apiFetch(
    `http://localhost:3000/transactions/${transaction.id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: transaction.amount,
        date: transaction.date,
        description: transaction.description,
        categoryId: transaction.categoryId,
        walletId: transaction.walletId,
      }),
    }
  )

  if (!response.ok) {
    throw new Error("Erreur modification transaction")
  }

  return response.json()
}
export async function deleteTransaction(id: number) {
  const response = await apiFetch(
    `http://localhost:3000/transactions/${id}`,
    {
      method: "DELETE",
    }
  )

  if (!response.ok) {
    throw new Error("Erreur suppression transaction")
  }
}

const API_URL = "http://localhost:3000/transactions"

export async function getTransactions(): Promise<Transaction[]> {
  const response = await apiFetch(API_URL)

  if (!response.ok) {
    throw new Error("Erreur récupération transactions")
  }

  const data = await response.json()

  return data.map((transaction: any) => ({
    id: transaction.id,
    amount: Number(transaction.amount),
    date: new Date(transaction.date),
    description: transaction.description,
    categoryId: transaction.category_id,
    walletId: transaction.wallet_id,
  }))
}
export async function createTransaction(
  transaction: Omit<Transaction, "id">
) {
  const response = await apiFetch(
    "http://localhost:3000/transactions",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: transaction.amount,
        date: transaction.date,
        description: transaction.description,
        categoryId: transaction.categoryId,
        walletId: transaction.walletId,
      }),
    }
  )

  if (!response.ok) {
    throw new Error("Erreur création transaction")
  }

  return response.json()
}