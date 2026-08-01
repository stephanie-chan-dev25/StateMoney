import { useState } from "react"
import WalletTable from "../components/wallets/WalletTable"
import WalletModal from "../components/wallets/WalletModal"
import { wallets as initialWallets } from "../data/wallets"
import type { Wallet } from "../types/wallet"

function WalletsPage() {
  const [wallets, setWallets] = useState(initialWallets)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedWallet, setSelectedWallet] = useState<Wallet | null>(null)

  function handleAddWallet(name: string) {
    setWallets((currentWallets) => [
      ...currentWallets,
      {
        id: currentWallets.length + 1,
        name,
      },
    ])
  }
  function handleDeleteWallet(id: number) {
    setWallets((currentWallets) =>
      currentWallets.filter(
        (wallet) => wallet.id !== id
      )
    )
  }
  function handleEditWallet(
    id: number,
    name: string
  ) {
    setWallets((currentWallets) =>
      currentWallets.map((wallet) =>
        wallet.id === id
          ? {
              ...wallet,
              name,
            }
          : wallet
      )
    )
  }
  function handleOpenEdit(wallet: Wallet) {
    setSelectedWallet(wallet)
    setIsModalOpen(true)
  }
  return (
    <section>
      <header>
        <h2>💼 Portefeuilles</h2>

        <button
          type="button"
          onClick={() => {
            setSelectedWallet(null)
            setIsModalOpen(true)
          }}
        >
          + Nouveau portefeuille
        </button>
      </header>

      {isModalOpen && (
        <WalletModal
          onClose={() => setIsModalOpen(false)}
          onAddWallet={handleAddWallet}
          onEditWallet={handleEditWallet}
          selectedWallet={selectedWallet}
        />
      )}

      <WalletTable
        wallets={wallets}
        onDeleteWallet={handleDeleteWallet}
        onEditWallet={handleOpenEdit}
      />
    </section>
  )
}

export default WalletsPage