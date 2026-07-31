import MonthlyExpenses from "./MonthlyExpenses"
import MonthlyIncome from "./MonthlyIncome"
import MonthlySavings from "./MonthlySavings"
import TotalBalance from "./TotalBalance"
import TransactionHistory from "./TransactionHistory"
import { transactions } from "../../data/transactions"
import {
  calculateIncome,
  calculateExpenses,
  calculateSavings,
  calculateBalance,
} from "../../utils/transactionCalculations"
import "./Dashboard.css"
type DashboardProps = {
  title: string
}

function Dashboard({ title }: DashboardProps) {
  const totalBalance = calculateBalance(transactions)
  const monthlyIncome = calculateIncome(transactions)
  const monthlyExpenses = calculateExpenses(transactions)
  const monthlySavings = calculateSavings(monthlyIncome, monthlyExpenses)
  
  return (
    <section className="dashboard">
      <h2>{title}</h2>

      <TotalBalance balance={totalBalance} />

      <div className="dashboard-stats">
        <MonthlyIncome amount={monthlyIncome} />
        
        <MonthlyExpenses amount={monthlyExpenses} />
        
        <MonthlySavings amount={monthlySavings} />
      </div>

      <TransactionHistory transactions={transactions} />
    </section>
  )
}

export default Dashboard