import TransactionForm from "./TransactionForm"
import type { Wallet } from "../../../types/wallet"
import type { Category } from "../../../types/category"
import type { Transaction } from "../../../types/transaction"
type TransactionModalProps = {
  wallets: Wallet[]
  categories: Category[]
  editingTransaction: Transaction | null
  onAddTransaction: (transaction: Transaction) => void
  onUpdateTransaction: (transaction: Transaction) => void
  onClose: () => void
}

function TransactionModal({
  wallets,
  categories,
  editingTransaction,
  onAddTransaction,
  onUpdateTransaction,
  onClose,
}: TransactionModalProps){
  return (
    <div className="transaction-modal-overlay">
      <div className="transaction-modal">
        <TransactionForm
          wallets={wallets}
          categories={categories}
          editingTransaction={editingTransaction}
          onAddTransaction={onAddTransaction}
          onUpdateTransaction={onUpdateTransaction}
          onClose={onClose}
        />
      </div>
    </div>
  )
}

export default TransactionModal