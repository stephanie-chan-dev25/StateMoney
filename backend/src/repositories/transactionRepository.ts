import pool from "../config/database"
export async function findTransactionByUser(
  transactionId: number,
  userId: number
) {
  const result = await pool.query(
    `
    SELECT transactions.*
    FROM transactions
    JOIN wallets
      ON wallets.id = transactions.wallet_id
    WHERE
      transactions.id = $1
      AND wallets.user_id = $2
    `,
    [transactionId, userId]
  )

  return result.rows[0]
}
export async function updateTransaction(
  id: number,
  transaction: {
    amount: number
    date: string
    description: string
    categoryId: number
    walletId: number
  }
) {
  const result = await pool.query(
    `
    UPDATE transactions
    SET
      amount = $1,
      date = $2,
      description = $3,
      category_id = $4,
      wallet_id = $5
    WHERE id = $6
    RETURNING *
    `,
    [
      transaction.amount,
      transaction.date,
      transaction.description,
      transaction.categoryId,
      transaction.walletId,
      id,
    ]
  )

  return result.rows[0]
}
export async function deleteTransaction(id: number) {
  await pool.query(
    `
    DELETE FROM transactions
    WHERE id = $1
    `,
    [id]
  )
}

export async function findAllTransactions(userId: number) {
  const result = await pool.query(
    `
    SELECT
      transactions.id,
      transactions.amount,
      transactions.date,
      transactions.description,
      transactions.category_id,
      transactions.wallet_id,
      categories.name AS category_name,
      categories.type AS category_type,
      wallets.name AS wallet_name
    FROM transactions
    JOIN categories
      ON categories.id = transactions.category_id
    JOIN wallets
      ON wallets.id = transactions.wallet_id
    WHERE wallets.user_id = $1
    ORDER BY transactions.date DESC
    `,
    [userId]
  )

  return result.rows
}

export async function createTransaction(transaction: {
  amount: number
  date: string
  description: string
  categoryId: number
  walletId: number
}) {
  const result = await pool.query(
    `
    INSERT INTO transactions (
      amount,
      date,
      description,
      category_id,
      wallet_id
    )
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *
    `,
    [
      transaction.amount,
      transaction.date,
      transaction.description,
      transaction.categoryId,
      transaction.walletId,
    ]
  )

  return result.rows[0]
}