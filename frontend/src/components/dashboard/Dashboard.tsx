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
import { calculateIncomeByCategory } from "../../utils/incomeCalculations"
import { filterTransactionsByMonth } from "../../utils/transactionCalculations"
import { calculateExpensesByCategory } from "../../utils/expenseCalculations"
const monthlyTransactions = filterTransactionsByMonth(
  transactions,
  7,
  2026
)
type DashboardProps = {
  title: string
}

function Dashboard({ title }: DashboardProps) {
  const incomeByCategory = calculateIncomeByCategory(monthlyTransactions)
  const expensesByCategory = calculateExpensesByCategory(monthlyTransactions)
  const totalBalance = calculateBalance(transactions)
  const monthlyIncome = calculateIncome(monthlyTransactions)
  const monthlyExpenses = calculateExpenses(monthlyTransactions)
  const monthlySavings = calculateSavings(monthlyIncome, monthlyExpenses)
  
  return (
    <section className="dashboard">
      <h2>{title}</h2>

      <TotalBalance balance={totalBalance} />

      <div className="dashboard-stats">
        <MonthlyIncome
        amount={monthlyIncome}
        incomes={incomeByCategory}
        />
        
        <MonthlyExpenses
        amount={monthlyExpenses}
        expenses={expensesByCategory}
        />
        
        <MonthlySavings amount={monthlySavings} />
      </div>

      <TransactionHistory transactions={transactions} />
    </section>
  )
}

export default Dashboard