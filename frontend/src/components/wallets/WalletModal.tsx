import WalletForm from "./WalletForm"

import type { Wallet } from "../../types/wallet"
import "./WalletModal.css"

type WalletModalProps = {
  onClose: () => void

  onAddWallet: (
    name: string
  ) => void

  onEditWallet: (
    id: number,
    name: string
  ) => void

  selectedWallet: Wallet | null
}

function WalletModal({
  onClose,
  onAddWallet,
  onEditWallet,
  selectedWallet,
}: WalletModalProps) {
  return (
    <div className="wallet-modal-overlay">
      <div className="wallet-modal">
        <WalletForm
          onClose={onClose}
          onAddWallet={onAddWallet}
          onEditWallet={onEditWallet}
          selectedWallet={selectedWallet}
        />
      </div>
    </div>
  )
}

export default WalletModal