import { useState } from "react"
import type { Wallet } from "../../types/wallet"
import "./WalletForm.css"

type WalletFormProps = {
  onClose: () => void
  onAddWallet: (name: string) => void
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

  function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault()

    if (name.trim() === "") {
      return
    }

    if (selectedWallet) {
      onEditWallet(
        selectedWallet.id,
        name.trim()
      )
    } else {
      onAddWallet(name.trim())
    }

    setName("")
    onClose()
  }

  return (
    <form
      className="wallet-form"
      onSubmit={handleSubmit}
    >
      <h2>
        {selectedWallet
          ? "Modifier le portefeuille"
          : "Nouveau portefeuille"}
      </h2>

      <div className="wallet-form-field">
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
          autoFocus
        />
      </div>

      <div className="wallet-form-actions">
        <button
          type="button"
          className="wallet-form-cancel"
          onClick={onClose}
        >
          Annuler
        </button>

        <button
          type="submit"
          className="wallet-form-submit"
        >
          {selectedWallet
            ? "Modifier"
            : "Ajouter"}
        </button>
      </div>
    </form>
  )
}

export default WalletForm