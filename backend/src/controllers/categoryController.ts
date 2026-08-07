import type { Request, Response } from "express"

import {
  getAllCategories,
  addCategory,
  editCategory,
  removeCategory,
  getCategoryByUser,
} from "../services/categoryService"


export async function getCategories(
  req: Request,
  res: Response
) {
  try {
    const categories =
      await getAllCategories(
        req.user!.id
      )

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
    const category =
      await addCategory({
        ...req.body,
        userId: req.user!.id,
      })

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

    const existingCategory =
      await getCategoryByUser(
        id,
        req.user!.id
      )

    if (!existingCategory) {
      res.status(403).json({
        message:
          "Cette catégorie ne vous appartient pas",
      })

      return
    }

    const category =
      await editCategory(
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

    const existingCategory =
      await getCategoryByUser(
        id,
        req.user!.id
      )

    if (!existingCategory) {
      res.status(403).json({
        message:
          "Cette catégorie ne vous appartient pas",
      })

      return
    }

    await removeCategory(id)

    res.status(204).send()

  } catch (error) {
    console.error(error)

    res.status(500).json({
      message: "Erreur suppression catégorie",
    })
  }
}