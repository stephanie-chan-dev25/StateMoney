import type { Category } from "../../types/category"
import "./CategoryTable.css"

type CategoryTableProps = {
  categories: Category[]
  onDeleteCategory: (id: number) => void
  onEditCategory: (category: Category) => void
}

function CategoryTable({
  categories,
  onDeleteCategory,
  onEditCategory,
}: CategoryTableProps) {
  return (
    <section className="category-table">
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Type</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {categories.map((category) => (
            <tr key={category.id}>
              <td>{category.name}</td>

              <td>
                <span
                  className={
                    category.type === "income"
                      ? "category-type-income"
                      : "category-type-expense"
                  }
                >
                  {category.type === "income"
                    ? "Revenu"
                    : "Dépense"}
                </span>
              </td>

              <td className="category-actions">
                <button
                  type="button"
                  className="category-action-button"
                  aria-label="Modifier"
                  onClick={() =>
                    onEditCategory(category)
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
                  className="category-action-button"
                  aria-label="Supprimer"
                  onClick={() =>
                    onDeleteCategory(category.id)
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
          ))}
        </tbody>
      </table>
    </section>
  )
}

export default CategoryTable