import {
  findAllCategories,
  createCategory,
  updateCategory,
  deleteCategory,
  findCategoryByUser,
} from "../repositories/categoryRepository"


export function getAllCategories(
  userId: number
) {
  return findAllCategories(userId)
}


export function addCategory(category: {
  name: string
  type: string
  userId: number
}) {
  return createCategory(category)
}


export function getCategoryByUser(
  categoryId: number,
  userId: number
) {
  return findCategoryByUser(
    categoryId,
    userId
  )
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