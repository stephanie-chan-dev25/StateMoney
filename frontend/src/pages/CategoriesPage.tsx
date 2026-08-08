import { useEffect, useState } from "react"
import CategoryTable from "../components/categories/CategoryTable"
import CategoryModal from "../components/categories/CategoryModal"
import type { Category } from "../types/category"
import {
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../services/categoryService"
import "./CategoriesPage.css"

function CategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] =
    useState<Category | null>(null)

  useEffect(() => {
    async function loadCategories() {
      try {
        const data = await getCategories()
        setCategories(data)
      } catch (error) {
        console.error(error)
      }
    }

    loadCategories()
  }, [])

  async function handleAddCategory(
    name: string,
    type: "income" | "expense"
  ) {
    try {
      const category = await createCategory({
        name,
        type,
      })

      setCategories((currentCategories) => [
        ...currentCategories,
        category,
      ])
    } catch (error) {
      console.error(error)
    }
  }

  async function handleDeleteCategory(id: number) {
    try {
      await deleteCategory(id)

      setCategories((currentCategories) =>
        currentCategories.filter(
          (category) => category.id !== id
        )
      )
    } catch (error) {
      console.error(error)
    }
  }

  async function handleEditCategory(
    id: number,
    name: string,
    type: "income" | "expense"
  ) {
    try {
      const category = await updateCategory(id, {
        name,
        type,
      })

      setCategories((currentCategories) =>
        currentCategories.map(
          (currentCategory) =>
            currentCategory.id === id
              ? category
              : currentCategory
        )
      )
    } catch (error) {
      console.error(error)
    }
  }

  function handleOpenEdit(category: Category) {
    setSelectedCategory(category)
    setIsModalOpen(true)
  }

  return (
    <section className="categories-page">
      <header className="categories-page-header">
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