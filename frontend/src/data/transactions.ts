import type { Transaction } from "../types/transaction"

export const transactions: Transaction[] = [
  {
    id: 1,
    amount: 2000000,
    date: new Date("2026-08-01"),
    type: "income",
    categoryId: 1,
    walletId: 2,
    description: "Salaire août",
  },
  {
    id: 2,
    amount: 50000,
    date: new Date("2026-08-02"),
    type: "expense",
    categoryId: 3,
    walletId: 1,
    description: "Courses",
  },
  {
    id: 3,
    amount: 15000,
    date: new Date("2026-08-03"),
    type: "expense",
    categoryId: 4,
    walletId: 1,
    description: "Transport",
  },
]