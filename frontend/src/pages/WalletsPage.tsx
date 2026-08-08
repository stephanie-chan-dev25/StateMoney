import { useEffect, useState } from "react"
import WalletTable from "../components/wallets/WalletTable"
import WalletModal from "../components/wallets/WalletModal"
import type { Wallet } from "../types/wallet"
import type { Transaction } from "../types/transaction"
import type { Category } from "../types/category"
import {
  getWallets,
  createWallet,
  updateWallet,
  deleteWallet,
} from "../services/walletService"
import { getTransactions } from "../services/transactionService"
import { getCategories } from "../services/categoryService"


function WalletsPage() {
  const [wallets, setWallets] = useState<Wallet[]>([])
  const [transactions, setTransactions] =
    useState<Transaction[]>([])
  const [categories, setCategories] =
    useState<Category[]>([])

  const [isModalOpen, setIsModalOpen] =
    useState(false)

  const [selectedWallet, setSelectedWallet] =
    useState<Wallet | null>(null)

  useEffect(() => {
    async function loadWallets() {
      try {
        const data = await getWallets()
        setWallets(data)
      } catch (error) {
        console.error(error)
      }
    }

    loadWallets()
  }, [])

  useEffect(() => {
    async function loadWalletData() {
      try {
        const [
          transactionData,
          categoryData,
        ] = await Promise.all([
          getTransactions(),
          getCategories(),
        ])

        setTransactions(transactionData)
        setCategories(categoryData)
      } catch (error) {
        console.error(error)
      }
    }

    loadWalletData()
  }, [])

  async function handleAddWallet(
    name: string
  ) {
    try {
      const wallet = await createWallet(name)

      setWallets((currentWallets) => [
        ...currentWallets,
        wallet,
      ])
    } catch (error) {
      console.error(error)
    }
  }

  async function handleDeleteWallet(
    id: number
  ) {
    try {
      await deleteWallet(id)

      setWallets((currentWallets) =>
        currentWallets.filter(
          (wallet) => wallet.id !== id
        )
      )
    } catch (error) {
      console.error(error)
    }
  }

  async function handleEditWallet(
    id: number,
    name: string
  ) {
    try {
      const wallet = await updateWallet(
        id,
        name
      )

      setWallets((currentWallets) =>
        currentWallets.map(
          (currentWallet) =>
            currentWallet.id === id
              ? wallet
              : currentWallet
        )
      )
    } catch (error) {
      console.error(error)
    }
  }

  function handleOpenEdit(
    wallet: Wallet
  ) {
    setSelectedWallet(wallet)
    setIsModalOpen(true)
  }

  return (
    <section className="wallets-page">
      <header className="wallets-page-header">
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
          onClose={() =>
            setIsModalOpen(false)
          }
          onAddWallet={handleAddWallet}
          onEditWallet={handleEditWallet}
          selectedWallet={selectedWallet}
        />
      )}

      <WalletTable
        wallets={wallets}
        transactions={transactions}
        categories={categories}
        onDeleteWallet={handleDeleteWallet}
        onEditWallet={handleOpenEdit}
      />
    </section>
  )
}

export default WalletsPage