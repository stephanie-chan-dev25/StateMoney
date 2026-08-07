import type { Goal } from "../types/goal"
import { apiFetch } from "../utils/api"


const API_URL = "http://localhost:3000/goals"


export async function getGoals(): Promise<Goal[]> {
  const response = await apiFetch(API_URL)

  if (!response.ok) {
    throw new Error("Erreur récupération objectifs")
  }

  const data = await response.json()

  return data.map((goal: any) => ({
    id: goal.id,
    name: goal.name,
    targetAmount: Number(goal.target_amount),
  }))
}


export async function createGoal(
  goal: Omit<Goal, "id">
): Promise<Goal> {
  const response = await apiFetch(
    API_URL,
    {
      method: "POST",
      body: JSON.stringify({
        name: goal.name,
        targetAmount: goal.targetAmount,
      }),
    }
  )

  if (!response.ok) {
    throw new Error("Erreur création objectif")
  }

  const data = await response.json()

  return {
    id: data.id,
    name: data.name,
    targetAmount: Number(data.target_amount),
  }
}


export async function updateGoal(
  id: number,
  goal: Omit<Goal, "id">
): Promise<Goal> {
  const response = await apiFetch(
    `${API_URL}/${id}`,
    {
      method: "PUT",
      body: JSON.stringify({
        name: goal.name,
        targetAmount: goal.targetAmount,
      }),
    }
  )

  if (!response.ok) {
    throw new Error("Erreur modification objectif")
  }

  const data = await response.json()

  return {
    id: data.id,
    name: data.name,
    targetAmount: Number(data.target_amount),
  }
}


export async function deleteGoal(
  id: number
): Promise<void> {
  const response = await apiFetch(
    `${API_URL}/${id}`,
    {
      method: "DELETE",
    }
  )

  if (!response.ok) {
    throw new Error("Erreur suppression objectif")
  }
}