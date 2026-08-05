import type { Request, Response } from "express"
import {
  getAllCategories,
  addCategory,
  editCategory,
  removeCategory,
} from "../services/categoryService"

export async function getCategories(
  req: Request,
  res: Response
) {
  try {
    const categories = await getAllCategories()

    res.json(categories)
  } catch (error) {
    console.error(error)

    res.status(500).json({
      message: "Erreur récupération catégories",
    })
  }
}

export async function createCategory(
  req: Request,
  res: Response
) {
  try {
    const category = await addCategory(req.body)

    res.status(201).json(category)
  } catch (error) {
    console.error(error)

    res.status(500).json({
      message: "Erreur création catégorie",
    })
  }
}

export async function updateCategory(
  req: Request,
  res: Response
) {
  try {
    const id = Number(req.params.id)

    const category = await editCategory(
      id,
      req.body
    )

    res.json(category)
  } catch (error) {
    console.error(error)

    res.status(500).json({
      message: "Erreur modification catégorie",
    })
  }
}

export async function deleteCategory(
  req: Request,
  res: Response
) {
  try {
    const id = Number(req.params.id)

    await removeCategory(id)

    res.status(204).send()
  } catch (error) {
    console.error(error)

    res.status(500).json({
      message: "Erreur suppression catégorie",
    })
  }
}