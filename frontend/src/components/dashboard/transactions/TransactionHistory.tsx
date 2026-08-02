import TransactionItem from "./TransactionItem"
import type { Transaction } from "../../../types/transaction"
import "./TransactionHistory.css"

type TransactionHistoryProps = {
  transactions: Transaction[]
  onDeleteTransaction: (id: number) => void
  onEditTransaction: (transaction: Transaction) => void
  onOpenModal: () => void
}

function TransactionHistory({
  transactions,
  onDeleteTransaction,
  onEditTransaction,
  onOpenModal,
}: TransactionHistoryProps) {
  return (
    <section className="transaction-history">
      <div className="transaction-history-header">
        <h3>📜 Historique des transactions</h3>
        
        <button
          type="button"
          onClick={onOpenModal}
        >
          + Nouvelle transaction
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Catégorie</th>
            <th>Portefeuille</th>
            <th>Type</th>
            <th>Montant</th>
            <th></th>
          </tr>
        </thead>
        
        <tbody>
          {transactions.map((transaction) => (
            <TransactionItem
              key={transaction.id}
              transaction={transaction}
              onDeleteTransaction={onDeleteTransaction}
              onEditTransaction={onEditTransaction}
            />
          ))}
        </tbody>
      </table>
    </section>
  )
}

export default TransactionHistory