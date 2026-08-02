import TransactionForm from "./TransactionForm"
import type { Wallet } from "../../../types/wallet"
import type { Category } from "../../../types/category"
type TransactionModalProps = {
  wallets: Wallet[]
  categories: Category[]
}

function TransactionModal({
  wallets,
  categories,
}: TransactionModalProps) {
  return (
    <div className="transaction-modal-overlay">
      <div className="transaction-modal">
        <TransactionForm
          wallets={wallets}
          categories={categories}
        />
      </div>
    </div>
  )
}

export default TransactionModal