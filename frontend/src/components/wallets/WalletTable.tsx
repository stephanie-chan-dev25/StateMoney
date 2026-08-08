import type { Wallet } from "../../types/wallet"
import type { Transaction } from "../../types/transaction"
import type { Category } from "../../types/category"
import { calculateWalletBalance } from "../../utils/transactionCalculations"
import "./WalletTable.css"

type WalletTableProps = {
  wallets: Wallet[]
  transactions: Transaction[]
  categories: Category[]
  onDeleteWallet: (id: number) => void
  onEditWallet: (wallet: Wallet) => void
}

function WalletTable({
  wallets,
  transactions,
  categories,
  onDeleteWallet,
  onEditWallet,
}: WalletTableProps) {
  return (
    <section className="wallet-table">
      <table>
        <thead>
          <tr>
            <th>Portefeuille</th>
            <th>Solde</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {wallets.map((wallet) => {
            const balance = calculateWalletBalance(
              wallet.id,
              transactions,
              categories
            )

            return (
              <tr key={wallet.id}>
                <td>{wallet.name}</td>

                <td>
                  {balance.toLocaleString(
                    "fr-FR"
                  )}{" "}
                  Ar
                </td>

                <td className="wallet-actions">
                  <button
                    type="button"
                    className="wallet-action-button"
                    aria-label="Modifier"
                    onClick={() =>
                      onEditWallet(wallet)
                    }
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 20h9" />
                      <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
                    </svg>
                  </button>

                  <button
                    type="button"
                    className="wallet-action-button"
                    aria-label="Supprimer"
                    onClick={() =>
                      onDeleteWallet(wallet.id)
                    }
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 6h18" />
                      <path d="M8 6V4h8v2" />
                      <path d="M19 6l-1 14H6L5 6" />
                      <path d="M10 11v5" />
                      <path d="M14 11v5" />
                    </svg>
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </section>
  )
}

export default WalletTable