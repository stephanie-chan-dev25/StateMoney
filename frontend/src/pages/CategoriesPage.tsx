import { useState } from "react"
import CategoryTable from "../components/categories/CategoryTable"
import CategoryModal from "../components/categories/CategoryModal"
import { categories as initialCategories } from "../data/categories"
import type { Category } from "../types/category"

function CategoriesPage() {
  const [categories, setCategories] = useState(
    initialCategories
  )

  const [isModalOpen, setIsModalOpen] = useState(false)

  const [selectedCategory, setSelectedCategory] =
    useState<Category | null>(null)


  function handleAddCategory(
    name: string,
    type: "income" | "expense"
  ) {
    setCategories((currentCategories) => [
      ...currentCategories,
      {
        id: currentCategories.length + 1,
        name,
        type,
      },
    ])
  }


  function handleDeleteCategory(id: number) {
    setCategories((currentCategories) =>
      currentCategories.filter(
        (category) => category.id !== id
      )
    )
  }


  function handleEditCategory(
    id: number,
    name: string,
    type: "income" | "expense"
  ) {
    setCategories((currentCategories) =>
      currentCategories.map((category) =>
        category.id === id
          ? {
              ...category,
              name,
              type,
            }
          : category
      )
    )
  }


  function handleOpenEdit(
    category: Category
  ) {
    setSelectedCategory(category)
    setIsModalOpen(true)
  }


  return (
    <section>
      <header>
        <h2>🏷️ Catégories</h2>

        <button
          type="button"
          onClick={() => {
            setSelectedCategory(null)
            setIsModalOpen(true)
          }}
        >
          + Nouvelle catégorie
        </button>
      </header>


      {isModalOpen && (
        <CategoryModal
          onClose={() =>
            setIsModalOpen(false)
          }
          onAddCategory={
            handleAddCategory
          }
          onEditCategory={
            handleEditCategory
          }
          selectedCategory={
            selectedCategory
          }
        />
      )}


      <CategoryTable
        categories={categories}
        onDeleteCategory={
          handleDeleteCategory
        }
        onEditCategory={
          handleOpenEdit
        }
      />
    </section>
  )
}

export default CategoriesPage