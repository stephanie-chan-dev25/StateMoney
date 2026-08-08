import { useEffect, useState } from "react"
import type { Wallet } from "../../../types/wallet"
import type { Category } from "../../../types/category"
import type { Transaction } from "../../../types/transaction"
import "./TransactionForm.css"

type TransactionFormProps = {
  wallets: Wallet[]
  categories: Category[]
  editingTransaction: Transaction | null
  onAddTransaction: (transaction: Transaction) => void
  onUpdateTransaction: (transaction: Transaction) => void
  onClose: () => void
}

function TransactionForm({
  wallets,
  categories,
  editingTransaction,
  onAddTransaction,
  onUpdateTransaction,
  onClose,
}: TransactionFormProps) {
  const [type, setType] =
    useState<"income" | "expense">("expense")

  const [amount, setAmount] = useState("")
  const [description, setDescription] = useState("")
  const [date, setDate] = useState("")

  const [walletId, setWalletId] = useState(
    wallets[0]?.id.toString() ?? ""
  )

  const [categoryId, setCategoryId] = useState(
    categories
      .find((category) => category.type === type)
      ?.id.toString() ?? ""
  )

  useEffect(() => {
    if (editingTransaction) {
      const category = categories.find(
        (category) =>
          category.id === editingTransaction.categoryId
      )

      setType(category?.type ?? "expense")
      setAmount(String(editingTransaction.amount))
      setDescription(editingTransaction.description)

      setDate(
        editingTransaction.date
          .toISOString()
          .split("T")[0]
      )

      setWalletId(
        String(editingTransaction.walletId)
      )

      setCategoryId(
        String(editingTransaction.categoryId)
      )
    }
  }, [editingTransaction, categories])

  const filteredCategories = categories.filter(
    (category) => category.type === type
  )

  function resetForm() {
    setType("expense")
    setAmount("")
    setDescription("")
    setDate("")
    setWalletId("")
    setCategoryId("")
  }

  function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault()

    const newTransaction: Transaction = {
      id: Date.now(),
      amount: Number(amount),
      date: new Date(date),
      categoryId: Number(categoryId),
      walletId: Number(walletId),
      description,
    }

    if (editingTransaction) {
      onUpdateTransaction({
        ...newTransaction,
        id: editingTransaction.id,
      })
    } else {
      onAddTransaction(newTransaction)
    }

    onClose()
    resetForm()
  }

  return (
    <form
      className="transaction-form"
      onSubmit={handleSubmit}
    >
      <h2>
        {editingTransaction
          ? "Modifier la transaction"
          : "Nouvelle transaction"}
      </h2>

      <div className="transaction-form-field">
        <label htmlFor="type">Type</label>

        <select
          id="type"
          value={type}
          onChange={(event) => {
            const newType =
              event.target.value as
                | "income"
                | "expense"

            setType(newType)

            const firstCategory =
              categories.find(
                (category) =>
                  category.type === newType
              )

            setCategoryId(
              firstCategory?.id.toString() ?? ""
            )
          }}
        >
          <option value="income">
            Revenu
          </option>

          <option value="expense">
            Dépense
          </option>
        </select>
      </div>

      <div className="transaction-form-field">
        <label htmlFor="amount">
          Montant
        </label>

        <input
          id="amount"
          type="number"
          min="0"
          value={amount}
          onChange={(event) =>
            setAmount(event.target.value)
          }
        />
      </div>

      <div className="transaction-form-field">
        <label htmlFor="description">
          Description
        </label>

        <input
          id="description"
          type="text"
          value={description}
          onChange={(event) =>
            setDescription(event.target.value)
          }
        />
      </div>

      <div className="transaction-form-field">
        <label htmlFor="date">Date</label>

        <input
          id="date"
          type="date"
          value={date}
          onChange={(event) =>
            setDate(event.target.value)
          }
        />
      </div>

      <div className="transaction-form-field">
        <label htmlFor="wallet">
          Portefeuille
        </label>

        <select
          id="wallet"
          value={walletId}
          onChange={(event) =>
            setWalletId(event.target.value)
          }
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

      <div className="transaction-form-field">
        <label htmlFor="category">
          Catégorie
        </label>

        <select
          id="category"
          value={categoryId}
          onChange={(event) =>
            setCategoryId(event.target.value)
          }
        >
          {filteredCategories.map(
            (category) => (
              <option
                key={category.id}
                value={category.id}
              >
                {category.name}
              </option>
            )
          )}
        </select>
      </div>

      <div className="transaction-form-actions">
        <button
          type="button"
          className="transaction-form-cancel"
          onClick={() => {
            resetForm()
            onClose()
          }}
        >
          Annuler
        </button>

        <button
          type="submit"
          className="transaction-form-submit"
        >
          {editingTransaction
            ? "Modifier"
            : "Ajouter"}
        </button>
      </div>
    </form>
  )
}

export default TransactionForm