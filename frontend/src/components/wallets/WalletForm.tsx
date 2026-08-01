import { useState } from "react"
import type { Wallet } from "../../types/wallet"
type WalletFormProps = {
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

function WalletForm({
  onClose,
  onAddWallet,
  onEditWallet,
  selectedWallet,
}: WalletFormProps) {
  const [name, setName] = useState(
      selectedWallet?.name ?? ""
    )

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()

        if (name.trim() === "") {
          return
        }

        if (selectedWallet) {
          onEditWallet(
            selectedWallet.id,
            name
          )
        } else {
          onAddWallet(name)
        }
        
        setName("")
        
        onClose()
      }}
    >
      <h2>
      {selectedWallet
        ? "Modifier le portefeuille"
        : "Nouveau portefeuille"}
    </h2>

      <label htmlFor="name">
        Nom
      </label>

      <input
        id="name"
        type="text"
        value={name}
        onChange={(event) =>
          setName(event.target.value)
        }
      />

      <button
        type="button"
        onClick={onClose}
      >
        Annuler
      </button>

      <button type="submit">
          {selectedWallet ? "Modifier" : "Ajouter"}
        </button>
    </form>
  )
}

export default WalletForm