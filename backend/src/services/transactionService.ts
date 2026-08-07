import { 
  findAllTransactions,
  createTransaction,
  updateTransaction,
  deleteTransaction,
  findTransactionByUser
} from "../repositories/transactionRepository"
export async function getTransactionByUser(
  transactionId: number,
  userId: number
) {
  return await findTransactionByUser(
    transactionId,
    userId
  )
}
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

export async function getAllTransactions(userId: number) {
  return await findAllTransactions(userId)
}
