import MonthlyExpenses from "./MonthlyExpenses"
import MonthlyIncome from "./MonthlyIncome"
import MonthlySavings from "./MonthlySavings"
import TotalBalance from "./TotalBalance"
import TransactionHistory from "./TransactionHistory"
import { transactions } from "../../data/transactions"
import { dashboardStats } from "../../data/dashboardStats"
import "./Dashboard.css"
type DashboardProps = {
  title: string
}

function Dashboard({ title }: DashboardProps) {
  const totalBalance = dashboardStats.totalBalance
  const monthlyIncome = dashboardStats.monthlyIncome
  const monthlyExpenses = dashboardStats.monthlyExpenses
  const monthlySavings = monthlyIncome - monthlyExpenses
  
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