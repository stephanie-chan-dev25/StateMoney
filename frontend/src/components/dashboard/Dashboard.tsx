import MonthlyExpenses from "./MonthlyExpenses"
import MonthlyIncome from "./MonthlyIncome"
import MonthlySavings from "./MonthlySavings";
import TotalBalance from "./TotalBalance"
import TransactionHistory from "./TransactionHistory";
import type { Transaction } from "../../types/transaction"
import { transactions } from "../../data/transactions"
type DashboardProps = {
  title: string
}

function Dashboard({ title }: DashboardProps) {
  const totalBalance = 2700000
  const monthlyIncome = 2500000
  const monthlyExpenses = 800000
  const monthlySavings = monthlyIncome - monthlyExpenses
  
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