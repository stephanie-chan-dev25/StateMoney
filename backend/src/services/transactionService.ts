import { 
  findAllTransactions,
  createTransaction,
  updateTransaction,
  deleteTransaction
} from "../repositories/transactionRepository"

export async function editTransaction(
  id: number,
  transaction: {
    amount: number
    date: string
    description: string
    categoryId: number
    walletId: number
  }
) {
  return await updateTransaction(id, transaction)
}
export async function removeTransaction(id: number) {
  await deleteTransaction(id)
}
export async function addTransaction(transaction: {
  amount: number
  date: string
  description: string
  categoryId: number
  walletId: number
}) {
  return await createTransaction(transaction)
}

export async function getAllTransactions() {
  return await findAllTransactions()
}