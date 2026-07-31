import type { Transaction } from "../../types/transaction"
import "./TransactionItem.css"
function TransactionItem({
  description,
  amount,
  type,
}: Transaction) {

  const isIncome = type === "revenu"

  return (
  <div className={isIncome ? "income" : "expense"}>
    <p>{description}</p>

    <p>
      {isIncome ? "+" : "-"} {amount} Ar
    </p>

    <p>{type}</p>
  </div>
)
}

export default TransactionItem