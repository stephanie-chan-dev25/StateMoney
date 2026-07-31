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

      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Catégorie</th>
            <th>Portefeuille</th>
            <th>Type</th>
            <th>Montant</th>
          </tr>
        </thead>
        
        <tbody>
          {transactions.map((transaction) => (
            <TransactionItem
              key={transaction.id}
              transaction={transaction}
            />
          ))}
        </tbody>
      </table>
    </section>
  )
}

export default TransactionHistory