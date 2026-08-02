export type TransactionType = "income" | "expense"

export interface Transaction {
  id: number
  amount: number
  date: Date
  type: TransactionType
  categoryId: number
  walletId: number
  description: string
}