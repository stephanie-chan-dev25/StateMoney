import type { Category } from "../../types/category"
import CategoryForm from "./CategoryForm"
import "./CategoryModal.css"

type CategoryModalProps = {
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

function CategoryModal({
  onClose,
  onAddCategory,
  onEditCategory,
  selectedCategory,
}: CategoryModalProps) {
  return (
    <div className="category-modal-overlay">
      <div className="category-modal">
        <CategoryForm
          onClose={onClose}
          onAddCategory={onAddCategory}
          onEditCategory={onEditCategory}
          selectedCategory={selectedCategory}
        />
      </div>
    </div>
  )
}

export default CategoryModal