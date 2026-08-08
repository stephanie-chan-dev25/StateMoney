import pool from "../config/database"


export async function findWalletByUser(
  walletId: number,
  userId: number
) {
  const result = await pool.query(
    `
      SELECT *
      FROM wallets
      WHERE id = $1
      AND user_id = $2
    `,
    [walletId, userId]
  )

  return result.rows[0]
}


export async function findAllWallets(
  userId: number
) {
  const result = await pool.query(
    `
      SELECT
        id,
        name
      FROM wallets
      WHERE user_id = $1
      ORDER BY id
    `,
    [userId]
  )

  return result.rows
}


export async function createWallet(
  name: string,
  userId: number
) {
  const result = await pool.query(
    `
      INSERT INTO wallets (
        name,
        user_id
      )
      VALUES ($1, $2)
      RETURNING *
    `,
    [name, userId]
  )

  return result.rows[0]
}


export async function updateWallet(
  id: number,
  name: string,
  userId: number
) {
  const result = await pool.query(
    `
      UPDATE wallets
      SET name = $1
      WHERE id = $2
      AND user_id = $3
      RETURNING *
    `,
    [name, id, userId]
  )

  return result.rows[0]
}


export async function deleteWallet(
  id: number,
  userId: number
) {
  await pool.query(
    `
      DELETE FROM wallets
      WHERE id = $1
      AND user_id = $2
    `,
    [id, userId]
  )
}