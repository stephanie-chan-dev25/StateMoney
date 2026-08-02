import type { Transaction } from "../../../types/transaction"
import "./TransactionItem.css"
type TransactionItemProps = {
  transaction: Transaction
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
function TransactionItem({
  transaction,
  onDeleteTransaction,
  onEditTransaction
}: TransactionItemProps) {
  const {
    description,
    amount,
    type,
    date,
    categoryId,
    walletId
  } = transaction 

  return (
  <tr className={getTransactionTypeClass(type)}>
    <td>{date.toLocaleDateString("fr-FR")}</td>
    <td>{description}</td>
    <td>{categoryId}</td>
    <td>{walletId}</td>
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