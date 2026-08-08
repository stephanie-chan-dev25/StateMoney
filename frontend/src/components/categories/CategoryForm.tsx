import { useState } from "react"
import type { Category } from "../../types/category"
import "./CategoryForm.css"

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
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault()

    if (name.trim() === "") {
      return
    }

    const trimmedName = name.trim()

    if (selectedCategory) {
      onEditCategory(
        selectedCategory.id,
        trimmedName,
        type
      )
    } else {
      onAddCategory(
        trimmedName,
        type
      )
    }

    setName("")
    setType("expense")
    onClose()
  }

  return (
    <form
      className="category-form"
      onSubmit={handleSubmit}
    >
      <h2>
        {selectedCategory
          ? "Modifier la catégorie"
          : "Nouvelle catégorie"}
      </h2>

      <div className="category-form-field">
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

      <div className="category-form-field">
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
      </div>

      <div className="category-form-actions">
        <button
          type="button"
          className="category-form-cancel"
          onClick={onClose}
        >
          Annuler
        </button>

        <button
          type="submit"
          className="category-form-submit"
        >
          {selectedCategory
            ? "Modifier"
            : "Ajouter"}
        </button>
      </div>
    </form>
  )
}

export default CategoryForm