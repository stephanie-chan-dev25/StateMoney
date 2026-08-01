import type { Wallet } from "../../types/wallet"

type WalletTableProps = {
  wallets: Wallet[]
  onDeleteWallet: (id: number) => void
  onEditWallet: (wallet: Wallet) => void
}

function WalletTable({
  wallets,
  onDeleteWallet,
  onEditWallet,
}: WalletTableProps) {
  return (
    <table>
      <thead>
        <tr>
          <th>Portefeuille</th>
          <th>Solde</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        {wallets.map((wallet) => (
          <tr key={wallet.id}>
            <td>{wallet.name}</td>
            <td>
              0 Ar
            </td>
            <td>
              <button
                type="button"
                aria-label="Modifier"
                onClick={() => onEditWallet(wallet)}
              >
                ✏️
              </button>
                    
              <button
                type="button"
                aria-label="Supprimer"
                onClick={() => onDeleteWallet(wallet.id)}
              >
                🗑️
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default WalletTable