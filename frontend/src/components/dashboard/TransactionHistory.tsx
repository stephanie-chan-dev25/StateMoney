import TransactionItem from "./TransactionItem"
import type { Transaction } from "../../types/transaction"

type TransactionHistoryProps = {
  transactions: Transaction[]
}

function TransactionHistory({ transactions }: TransactionHistoryProps) {
  return (
    <section>
      <h3>📜 Historique des transactions</h3>

      {transactions.map((transaction) => (
        <TransactionItem
          key={transaction.id}
          description={transaction.description}
          amount={transaction.amount}
          type={transaction.type}
        />
      ))}
    </section>
  )
}

export default TransactionHistory