import type { Transaction } from "../../types/transaction"
import "./TransactionItem.css"
type TransactionItemProps = {
  transaction: Transaction
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
}: TransactionItemProps) {
  const { description, amount, type, date, category, wallet } = transaction 
  const isIncome = type === "income"

  return (
  <div className={getTransactionTypeClass(type)}>
    <p>{description}</p>

    <p>{category} • {wallet}</p>

    <p>{date.toLocaleDateString("fr-FR")}</p>

    <p>{formatTransactionAmount(amount, type)}</p>

    <p>{getTransactionTypeLabel(type)}</p>
  </div>
)
}

export default TransactionItem