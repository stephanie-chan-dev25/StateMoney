import { useState } from "react"
import type { Category } from "../../types/category"

type CategoryFormProps = {
  onClose: () => void
  onAddCategory: (
    name: string,
    type: "income" | "expense"
  ) => void
  onEditCategory: (
    id: number,
    name: string,
    type: "income" | "expense"
  ) => void
  selectedCategory: Category | null
}

function CategoryForm({
  onClose,
  onAddCategory,
  onEditCategory,
  selectedCategory,
}: CategoryFormProps) {
  const [name, setName] = useState(
    selectedCategory?.name ?? ""
  )

  const [type, setType] = useState<
    "income" | "expense"
  >(
    selectedCategory?.type ?? "expense"
  )

  function handleSubmit(
    event: React.FormEvent
  ) {
    event.preventDefault()

    if (name.trim() === "") {
      return
    }

    if (selectedCategory) {
      onEditCategory(
        selectedCategory.id,
        name,
        type
      )
    } else {
      onAddCategory(
        name,
        type
      )
    }

    setName("")
    setType("expense")

    onClose()
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>
        {selectedCategory
          ? "Modifier la catégorie"
          : "Nouvelle catégorie"}
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

      <label htmlFor="type">
        Type
      </label>

      <select
        id="type"
        value={type}
        onChange={(event) =>
          setType(
            event.target.value as
              | "income"
              | "expense"
          )
        }
      >
        <option value="income">
          Revenu
        </option>

        <option value="expense">
          Dépense
        </option>
      </select>

      <button
        type="button"
        onClick={onClose}
      >
        Annuler
      </button>

      <button type="submit">
        {selectedCategory
          ? "Modifier"
          : "Ajouter"}
      </button>
    </form>
  )
}

export default CategoryForm