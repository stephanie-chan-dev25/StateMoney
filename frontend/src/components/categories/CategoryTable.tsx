import type { Category } from "../../types/category"

type CategoryTableProps = {
  categories: Category[]
  onDeleteCategory: (
    id: number
  ) => void
  onEditCategory: (
    category: Category
  ) => void
}

function CategoryTable({
  categories,
  onDeleteCategory,
  onEditCategory,
}: CategoryTableProps) {
  return (
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
            <td>
              {category.name}
            </td>

            <td>
              {category.type === "income"
                ? "Revenu"
                : "Dépense"}
            </td>

            <td>
              <button
                type="button"
                onClick={() =>
                  onEditCategory(category)
                }
              >
                ✏️
              </button>

              <button
                type="button"
                onClick={() =>
                  onDeleteCategory(category.id)
                }
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

export default CategoryTable