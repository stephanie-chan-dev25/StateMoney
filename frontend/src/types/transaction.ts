export type TransactionType = "income" | "expense"

export interface Transaction {
  id: number
  amount: number
  date: Date
  type: TransactionType
  category: string
  wallet: string
  description: string
}