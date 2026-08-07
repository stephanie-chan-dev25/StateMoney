import pool from "../config/database"

export async function findUserByEmail(
  email: string
) {
  const result = await pool.query(
    `
    SELECT
      id,
      email,
      password
    FROM users
    WHERE email = $1
    `,
    [email]
  )

  return result.rows[0]
}

export async function createUser(user: {
  email: string
  password: string
}) {
  const result = await pool.query(
    `
    INSERT INTO users (
      email,
      password
    )
    VALUES ($1, $2)
    RETURNING
      id,
      email,
      created_at
    `,
    [
      user.email,
      user.password,
    ]
  )

  return result.rows[0]
}

export async function findUserById(
  id: number
) {
  const result = await pool.query(
    `
    SELECT
      id,
      email,
      created_at
    FROM users
    WHERE id = $1
    `,
    [id]
  )

  return result.rows[0]
}