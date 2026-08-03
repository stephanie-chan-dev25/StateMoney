import type { Transaction } from "../../../types/transaction"
import "./TransactionItem.css"
import type { Wallet } from "../../../types/wallet"
import type { Category } from "../../../types/category"
type TransactionItemProps = {
  transaction: Transaction
  wallets: Wallet[]
  categories: Category[]
  onDeleteTransaction: (id: number) => void
  onEditTransaction: (transaction: Transaction) => void
}
function getTransactionTypeLabel(type: "income" | "expense") {
  return type === "income" ? "Revenu" : "Dépense"
}
function getTransactionTypeClass(type: "income" | "expense") {
  return type === "income" ? "income" : "expense"
}
function formatTransactionAmount(amount: number, type: "income" | "expense") {
  return `${type === "income" ? "+" : "-"} ${amount.toLocaleString("fr-FR")} Ar`
}
function getWalletName(
  walletId: number,
  wallets: Wallet[]
) {
  const wallet = wallets.find(
    (wallet) => wallet.id === walletId
  )

  return wallet ? wallet.name : "Inconnu"
}

function getCategoryName(
  categoryId: number,
  categories: Category[]
) {
  const category = categories.find(
    (category) => category.id === categoryId
  )

  return category ? category.name : "Inconnu"
}
function TransactionItem({
  transaction,
  wallets,
  categories,
  onDeleteTransaction,
  onEditTransaction
}: TransactionItemProps) {
  const {
    description,
    amount,
    date,
    categoryId,
    walletId
  } = transaction 
  const category = categories.find(
    (category) => category.id === categoryId
  )
  
  const type = category?.type ?? "expense"
  return (
  <tr className={getTransactionTypeClass(type)}>
    <td>{date.toLocaleDateString("fr-FR")}</td>
    <td>{description}</td>
    <td>{getCategoryName(categoryId, categories)}</td>
    <td>{getWalletName(walletId, wallets)}</td>
    <td>{getTransactionTypeLabel(type)}</td>
    <td>{formatTransactionAmount(amount, type)}</td>
    <td>
      <button
        type="button"
        onClick={() =>
          onEditTransaction(transaction)
        }
      >
        ✏️
      </button>
      
      <button
        type="button"
        onClick={() =>
          onDeleteTransaction(transaction.id)
        }
      >
        🗑️
      </button>
    </td>
  </tr>
  )
}

export default TransactionItem