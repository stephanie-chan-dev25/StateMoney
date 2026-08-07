import type { Category } from "../types/category"
import { apiFetch } from "../utils/api"


const API_URL = "http://localhost:3000/categories"


export async function getCategories(): Promise<Category[]> {
  const response = await apiFetch(API_URL)

  if (!response.ok) {
    throw new Error("Erreur récupération catégories")
  }

  return response.json()
}


export async function createCategory(
  category: Omit<Category, "id">
): Promise<Category> {
  const response = await apiFetch(
    API_URL,
    {
      method: "POST",
      body: JSON.stringify(category),
    }
  )

  if (!response.ok) {
    throw new Error("Erreur création catégorie")
  }

  return response.json()
}


export async function updateCategory(
  id: number,
  category: Omit<Category, "id">
): Promise<Category> {
  const response = await apiFetch(
    `${API_URL}/${id}`,
    {
      method: "PUT",
      body: JSON.stringify(category),
    }
  )

  if (!response.ok) {
    throw new Error("Erreur modification catégorie")
  }

  return response.json()
}


export async function deleteCategory(
  id: number
): Promise<void> {
  const response = await apiFetch(
    `${API_URL}/${id}`,
    {
      method: "DELETE",
    }
  )

  if (!response.ok) {
    throw new Error("Erreur suppression catégorie")
  }
}