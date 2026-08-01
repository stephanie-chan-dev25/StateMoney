import type { Goal } from "../types/goal"

export function getGoalStatus(
  goal: Goal,
  totalBalance: number
) {
  return totalBalance >= goal.targetAmount
}