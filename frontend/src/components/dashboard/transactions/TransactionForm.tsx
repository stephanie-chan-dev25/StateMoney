import { useState } from "react"
import type { Wallet } from "../../../types/wallet"
import type { Category } from "../../../types/category"
import type { Transaction } from "../../../types/transaction"
type TransactionFormProps = {
  wallets: Wallet[]
  categories: Category[]
  onAddTransaction: (transaction: Transaction) => void
}

function TransactionForm({
  wallets,
  categories,
  onAddTransaction,
}: TransactionFormProps) {
  const [type, setType] = useState<"income" | "expense">("expense")
  const [amount, setAmount] = useState("")
  const [description, setDescription] = useState("")
  const [date, setDate] = useState("")
  const [walletId, setWalletId] = useState("")
  const [categoryId, setCategoryId] = useState("")
  const filteredCategories = categories.filter(
    (category) => category.type === type
  )
  return (
    <form>
      <h3>Nouvelle transaction</h3>

      <div>
        <label htmlFor="type">Type</label>

        <select
          id="type"
          value={type}
          onChange={(event) =>
            setType(event.target.value as "income" | "expense")
          }
        >
          <option value="income">Revenu</option>
          <option value="expense">Dépense</option>
        </select>
      </div>

      <div>
        <label htmlFor="amount">Montant</label>

        <input
          id="amount"
          type="number"
          min="0"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
        />
      </div>

      <div>
        <label htmlFor="description">Description</label>

        <input
          id="description"
          type="text"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </div>

      <div>
        <label htmlFor="date">Date</label>

        <input
          id="date"
          type="date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />
      </div>

      <div>
        <label htmlFor="wallet">Portefeuille</label>

        <select
          id="wallet"
          value={walletId}
          onChange={(event) => setWalletId(event.target.value)}
        >
          {wallets.map((wallet) => (
            <option
              key={wallet.id}
              value={wallet.id}
            >
              {wallet.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="category">Catégorie</label>

        <select
          id="category"
          value={categoryId}
          onChange={(event) => setCategoryId(event.target.value)}
        >
          {filteredCategories.map((category) => (
            <option
              key={category.id}
              value={category.id}
            >
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <button type="button">
          Annuler
        </button>

        <button type="submit">
          Ajouter
        </button>
      </div>
    </form>
  )
}

export default TransactionForm