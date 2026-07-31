export type TransactionType = "revenu" | "dépense"

export type Transaction = {
  id: number
  description: string
  amount: number
  type: TransactionType
}