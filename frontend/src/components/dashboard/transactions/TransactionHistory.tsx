import TransactionItem from "./TransactionItem"
import type { Transaction } from "../../../types/transaction"
import "./TransactionHistory.css"
import type { Wallet } from "../../../types/wallet"
import type { Category } from "../../../types/category"

type TransactionHistoryProps = {
  transactions: Transaction[]
  wallets: Wallet[]
  categories: Category[]
  onDeleteTransaction: (id: number) => void
  onEditTransaction: (transaction: Transaction) => void
  onOpenModal: () => void
}

function TransactionHistory({
  transactions,
  wallets,
  categories,
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
              wallets={wallets}
              categories={categories}
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