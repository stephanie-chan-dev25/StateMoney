import {
  findAllGoals,
  createGoal,
  updateGoal,
  deleteGoal,
  findGoalByUser,
} from "../repositories/goalRepository"


export function getAllGoals(
  userId: number
) {
  return findAllGoals(userId)
}


export function addGoal(goal: {
  name: string
  targetAmount: number
  userId: number
}) {
  return createGoal(goal)
}


export function getGoalByUser(
  goalId: number,
  userId: number
) {
  return findGoalByUser(
    goalId,
    userId
  )
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


export function removeGoal(
  id: number
) {
  return deleteGoal(id)
}