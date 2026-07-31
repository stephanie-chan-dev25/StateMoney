import type { Transaction } from "../../types/transaction"
import "./TransactionItem.css"
type TransactionItemProps = {
  transaction: Transaction
}
function TransactionItem({
  transaction,
}: TransactionItemProps) {
  const { description, amount, type } = transaction
  const isIncome = type === "income"

  return (
  <div className={isIncome ? "income" : "expense"}>
    <p>{description}</p>

    <p>
      {isIncome ? "+" : "-"} {amount} Ar
    </p>

    <p>{isIncome ? "Revenu" : "Dépense"}</p>
  </div>
)
}

export default TransactionItem