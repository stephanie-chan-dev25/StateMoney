import type { Request, Response } from "express"
import {
  getAllGoals,
  addGoal,
  editGoal,
  removeGoal,
} from "../services/goalService"

export async function getGoals(
  req: Request,
  res: Response
) {
  try {
    const goals = await getAllGoals()

    res.json(goals)
  } catch (error) {
    console.error(error)

    res.status(500).json({
      message: "Erreur récupération objectifs",
    })
  }
}

export async function createGoal(
  req: Request,
  res: Response
) {
  try {
    const goal = await addGoal(req.body)

    res.status(201).json(goal)
  } catch (error) {
    console.error(error)

    res.status(500).json({
      message: "Erreur création objectif",
    })
  }
}

export async function updateGoal(
  req: Request,
  res: Response
) {
  try {
    const id = Number(req.params.id)

    const goal = await editGoal(
      id,
      req.body
    )

    res.json(goal)
  } catch (error) {
    console.error(error)

    res.status(500).json({
      message: "Erreur modification objectif",
    })
  }
}

export async function deleteGoal(
  req: Request,
  res: Response
) {
  try {
    const id = Number(req.params.id)

    await removeGoal(id)

    res.status(204).send()
  } catch (error) {
    console.error(error)

    res.status(500).json({
      message: "Erreur suppression objectif",
    })
  }
}