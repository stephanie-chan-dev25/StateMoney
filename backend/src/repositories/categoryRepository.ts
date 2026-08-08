import pool from "../config/database"


export async function findAllCategories(
  userId: number
) {
  const result = await pool.query(
    `
      SELECT
        id,
        name,
        type
      FROM categories
      WHERE user_id = $1
      ORDER BY id
    `,
    [userId]
  )

  return result.rows
}


export async function createCategory(category: {
  name: string
  type: string
  userId: number
}) {
  const result = await pool.query(
    `
      INSERT INTO categories (
        name,
        type,
        user_id
      )
      VALUES ($1, $2, $3)
      RETURNING *
    `,
    [
      category.name,
      category.type,
      category.userId,
    ]
  )

  return result.rows[0]
}


export async function findCategoryByUser(
  categoryId: number,
  userId: number
) {
  const result = await pool.query(
    `
      SELECT *
      FROM categories
      WHERE id = $1
      AND user_id = $2
    `,
    [categoryId, userId]
  )

  return result.rows[0]
}


export async function updateCategory(
  id: number,
  category: {
    name: string
    type: string
  },
  userId: number
) {
  const result = await pool.query(
    `
      UPDATE categories
      SET
        name = $1,
        type = $2
      WHERE id = $3
      AND user_id = $4
      RETURNING *
    `,
    [
      category.name,
      category.type,
      id,
      userId,
    ]
  )

  return result.rows[0]
}


export async function deleteCategory(
  id: number,
  userId: number
) {
  await pool.query(
    `
      DELETE FROM categories
      WHERE id = $1
      AND user_id = $2
    `,
    [id, userId]
  )
}