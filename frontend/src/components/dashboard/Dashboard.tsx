import MonthlyExpenses from "./MonthlyExpenses"
import MonthlyIncome from "./MonthlyIncome"
import MonthlySavings from "./MonthlySavings";
import TotalBalance from "./TotalBalance"
import TransactionHistory from "./TransactionHistory";
import type { Transaction } from "../../types/transaction"
type DashboardProps = {
  title: string
}

function Dashboard({ title }: DashboardProps) {
  const totalBalance = 2700000
  const monthlyIncome = 2500000
  const monthlyExpenses = 800000
  const monthlySavings = monthlyIncome - monthlyExpenses
  const transactions: Transaction[] = [
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
  return (
    <section>
      <h2>{title}</h2>

      <TotalBalance balance={totalBalance} />

      <MonthlyIncome amount={monthlyIncome} />

      <MonthlyExpenses amount={monthlyExpenses} />

      <MonthlySavings amount={monthlySavings} />

      <TransactionHistory transactions={transactions} />
    </section>
  )
}

export default Dashboard