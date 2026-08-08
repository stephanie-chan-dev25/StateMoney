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
function formatTransactionAmount(amount: number) {
  return `${amount.toLocaleString("fr-FR")} Ar`
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
  <tr>
    <td>{date.toLocaleDateString("fr-FR")}</td>
    <td>{description}</td>
    <td>{getCategoryName(categoryId, categories)}</td>
    <td>{getWalletName(walletId, wallets)}</td>
    <td className={getTransactionTypeClass(type)}>
      {getTransactionTypeLabel(type)}
    </td>
    <td>{formatTransactionAmount(amount)}</td>
    <td>
      <button
        type="button"
        className="transaction-action-button"
        onClick={() => onEditTransaction(transaction)}
        aria-label="Modifier la transaction"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 20h9" />
          <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
        </svg>
      </button>
      
      <button
        type="button"
        className="transaction-action-button"
        onClick={() =>
          onDeleteTransaction(transaction.id)
        }
        aria-label="Supprimer la transaction"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 6h18" />
          <path d="M8 6V4h8v2" />
          <path d="M19 6l-1 14H6L5 6" />
          <path d="M10 11v5" />
          <path d="M14 11v5" />
        </svg>
      </button>
    </td>
  </tr>
  )
}

export default TransactionItem