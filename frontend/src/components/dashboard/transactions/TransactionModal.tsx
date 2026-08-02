import TransactionForm from "./TransactionForm"
import type { Wallet } from "../../../types/wallet"
import type { Category } from "../../../types/category"
import type { Transaction } from "../../../types/transaction"
type TransactionModalProps = {
  wallets: Wallet[]
  categories: Category[]
  onAddTransaction: (transaction: Transaction) => void
  onClose: () => void
}

function TransactionModal({
  wallets,
  categories,
  onAddTransaction,
  onClose,
}: TransactionModalProps){
  return (
    <div className="transaction-modal-overlay">
      <div className="transaction-modal">
        <TransactionForm
          wallets={wallets}
          categories={categories}
          onAddTransaction={onAddTransaction}
          onClose={onClose}
        />
      </div>
    </div>
  )
}

export default TransactionModal