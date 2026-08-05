import pool from "../config/database"

export async function findAllGoals() {
  const result = await pool.query(
    `
    SELECT
      id,
      name,
      target_amount
    FROM goals
    ORDER BY id
    `
  )

  return result.rows
}

export async function createGoal(goal: {
  name: string
  targetAmount: number
}) {
  const result = await pool.query(
    `
    INSERT INTO goals (
      name,
      target_amount
    )
    VALUES ($1, $2)
    RETURNING *
    `,
    [
      goal.name,
      goal.targetAmount,
    ]
  )

  return result.rows[0]
}

export async function updateGoal(
  id: number,
  goal: {
    name: string
    targetAmount: number
  }
) {
  const result = await pool.query(
    `
    UPDATE goals
    SET
      name = $1,
      target_amount = $2
    WHERE id = $3
    RETURNING *
    `,
    [
      goal.name,
      goal.targetAmount,
      id,
    ]
  )

  return result.rows[0]
}

export async function deleteGoal(id: number) {
  await pool.query(
    `
    DELETE FROM goals
    WHERE id = $1
    `,
    [id]
  )
}