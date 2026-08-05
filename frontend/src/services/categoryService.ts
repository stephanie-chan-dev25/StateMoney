import type { Category } from "../types/category"

const API_URL = "http://localhost:3000/categories"

export async function getCategories(): Promise<Category[]> {
  const response = await fetch(API_URL)

  if (!response.ok) {
    throw new Error("Erreur récupération catégories")
  }

  return response.json()
}

export async function createCategory(
  category: Omit<Category, "id">
): Promise<Category> {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(category),
  })

  if (!response.ok) {
    throw new Error("Erreur création catégorie")
  }

  return response.json()
}

export async function updateCategory(
  id: number,
  category: Omit<Category, "id">
): Promise<Category> {
  const response = await fetch(
    `${API_URL}/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
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
  const response = await fetch(
    `${API_URL}/${id}`,
    {
      method: "DELETE",
    }
  )

  if (!response.ok) {
    throw new Error("Erreur suppression catégorie")
  }
}