import type { Transaction } from "../../types/transaction"
import "./TransactionItem.css"
type TransactionItemProps = {
  transaction: Transaction
}
function getTransactionTypeLabel(type: "income" | "expense") {
  return type === "income" ? "Revenu" : "Dépense"
}
function TransactionItem({
  transaction,
}: TransactionItemProps) {
  const { description, amount, type, date } = transaction
  const isIncome = type === "income"

  return (
  <div className={isIncome ? "income" : "expense"}>
    <p>{description}</p>

    <p>{date.toLocaleDateString("fr-FR")}</p>
      
    <p>
      {isIncome ? "+" : "-"} {amount} Ar
    </p>
      
    <p>{getTransactionTypeLabel(type)}</p>
  </div>
)
}

export default TransactionItem