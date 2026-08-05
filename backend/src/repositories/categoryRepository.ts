import pool from "../config/database"

export async function findAllCategories() {
  const result = await pool.query(
    `
    SELECT
      id,
      name,
      type
    FROM categories
    ORDER BY id
    `
  )

  return result.rows
}

export async function createCategory(category: {
  name: string
  type: string
}) {
  const result = await pool.query(
    `
    INSERT INTO categories (
      name,
      type
    )
    VALUES ($1, $2)
    RETURNING *
    `,
    [
      category.name,
      category.type,
    ]
  )

  return result.rows[0]
}

export async function updateCategory(
  id: number,
  category: {
    name: string
    type: string
  }
) {
  const result = await pool.query(
    `
    UPDATE categories
    SET
      name = $1,
      type = $2
    WHERE id = $3
    RETURNING *
    `,
    [
      category.name,
      category.type,
      id,
    ]
  )

  return result.rows[0]
}

export async function deleteCategory(id: number) {
  await pool.query(
    `
    DELETE FROM categories
    WHERE id = $1
    `,
    [id]
  )
}