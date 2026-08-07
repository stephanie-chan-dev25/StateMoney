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

export async function findAllWallets() {
  const result = await pool.query(
    `
    SELECT
      id,
      name
    FROM wallets
    ORDER BY id
    `
  )

  return result.rows
}

export async function createWallet(name: string) {
  const result = await pool.query(
    `
    INSERT INTO wallets (
      name
    )
    VALUES ($1)
    RETURNING *
    `,
    [name]
  )

  return result.rows[0]
}

export async function updateWallet(
  id: number,
  name: string
) {
  const result = await pool.query(
    `
    UPDATE wallets
    SET name = $1
    WHERE id = $2
    RETURNING *
    `,
    [name, id]
  )

  return result.rows[0]
}

export async function deleteWallet(id: number) {
  await pool.query(
    `
    DELETE FROM wallets
    WHERE id = $1
    `,
    [id]
  )
}