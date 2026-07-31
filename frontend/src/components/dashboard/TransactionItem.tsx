import type { Transaction } from "../../types/transaction"
import "./TransactionItem.css"
type TransactionItemProps = {
  description: string
  amount: number
  type: "income" | "expense"
}
function TransactionItem({
  description,
  amount,
  type,
}: TransactionItemProps) {

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