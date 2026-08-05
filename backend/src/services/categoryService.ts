import {
  findAllCategories,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../repositories/categoryRepository"

export function getAllCategories() {
  return findAllCategories()
}

export function addCategory(category: {
  name: string
  type: string
}) {
  return createCategory(category)
}

export function editCategory(
  id: number,
  category: {
    name: string
    type: string
  }
) {
  return updateCategory(id, category)
}

export function removeCategory(id: number) {
  return deleteCategory(id)
}