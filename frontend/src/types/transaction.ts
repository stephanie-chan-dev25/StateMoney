export interface Transaction {
  id: number
  amount: number
  date: Date
  categoryId: number
  walletId: number
  description: string
}