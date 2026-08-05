import {
  findAllGoals,
  createGoal,
  updateGoal,
  deleteGoal,
} from "../repositories/goalRepository"

export function getAllGoals() {
  return findAllGoals()
}

export function addGoal(goal: {
  name: string
  targetAmount: number
}) {
  return createGoal(goal)
}

export function editGoal(
  id: number,
  goal: {
    name: string
    targetAmount: number
  }
) {
  return updateGoal(id, goal)
}

export function removeGoal(id: number) {
  return deleteGoal(id)
}