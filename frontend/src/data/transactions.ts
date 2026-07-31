import type { Transaction } from "../types/transaction"

export const transactions: Transaction[] = [
  {
    id: 1,
    description: "Salaire",
    amount: 2000000,
    type: "income",
    date: new Date("2026-08-01"),
    category: "Travail",
    wallet: "Compte bancaire"
  },
  {
    id: 2,
    description: "Courses alimentaires",
    amount: 150000,
    type: "expense",
    date: new Date("2026-08-02"),
    category: "Alimentation",
    wallet: "Espèces"
  }
]