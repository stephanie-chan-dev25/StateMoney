import pool from "../config/database"


export async function findAllGoals(
  userId: number
) {
  const result = await pool.query(
    `
      SELECT
        id,
        name,
        target_amount
      FROM goals
      WHERE user_id = $1
      ORDER BY id
    `,
    [userId]
  )

  return result.rows
}


export async function createGoal(goal: {
  name: string
  targetAmount: number
  userId: number
}) {
  const result = await pool.query(
    `
      INSERT INTO goals (
        name,
        target_amount,
        user_id
      )
      VALUES ($1, $2, $3)
      RETURNING *
    `,
    [
      goal.name,
      goal.targetAmount,
      goal.userId,
    ]
  )

  return result.rows[0]
}


export async function findGoalByUser(
  goalId: number,
  userId: number
) {
  const result = await pool.query(
    `
      SELECT *
      FROM goals
      WHERE id = $1
      AND user_id = $2
    `,
    [
      goalId,
      userId,
    ]
  )

  return result.rows[0]
}


export async function updateGoal(
  id: number,
  goal: {
    name: string
    targetAmount: number
  },
  userId: number
) {
  const result = await pool.query(
    `
      UPDATE goals
      SET
        name = $1,
        target_amount = $2
      WHERE id = $3
      AND user_id = $4
      RETURNING *
    `,
    [
      goal.name,
      goal.targetAmount,
      id,
      userId,
    ]
  )

  return result.rows[0]
}


export async function deleteGoal(
  id: number,
  userId: number
) {
  await pool.query(
    `
      DELETE FROM goals
      WHERE id = $1
      AND user_id = $2
    `,
    [
      id,
      userId,
    ]
  )
}