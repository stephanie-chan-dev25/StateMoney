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
  <tr className={getTransactionTypeClass(type)}>
    <td>{date.toLocaleDateString("fr-FR")}</td>
    <td>{description}</td>
    <td>{category}</td>
    <td>{wallet}</td>
    <td>{getTransactionTypeLabel(type)}</td>
    <td>{formatTransactionAmount(amount, type)}</td>
  </tr>
  )
}

export default TransactionItem