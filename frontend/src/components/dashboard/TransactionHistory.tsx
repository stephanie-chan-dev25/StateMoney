import TransactionItem from "./TransactionItem"
import type { Transaction } from "../../types/transaction"
import "./TransactionHistory.css"

type TransactionHistoryProps = {
  transactions: Transaction[]
}

function TransactionHistory({ transactions }: TransactionHistoryProps) {
  return (
    <section className="transaction-history">
      <h3>📜 Historique des transactions</h3>

      {transactions.map((transaction) => (
        <TransactionItem
        key={transaction.id}
        transaction={transaction}
        />
      ))}
    </section>
  )
}

export default TransactionHistory