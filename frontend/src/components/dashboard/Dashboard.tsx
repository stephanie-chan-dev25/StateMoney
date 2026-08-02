import MonthlyExpenses from "./MonthlyExpenses"
import MonthlyIncome from "./MonthlyIncome"
import MonthlySavings from "./MonthlySavings"
import TotalBalance from "./TotalBalance"
import TransactionHistory from "./transactions/TransactionHistory"
import { transactions as initialTransactions } from "../../data/transactions"
import { useState } from "react"
import {
  calculateIncome,
  calculateExpenses,
  calculateSavings,
  calculateBalance,
  filterTransactionsByMonth,
} from "../../utils/transactionCalculations"
import "./Dashboard.css"
import { calculateIncomeByCategory } from "../../utils/incomeCalculations"
import { calculateExpensesByCategory } from "../../utils/expenseCalculations"
import TransactionModal from "./transactions/TransactionModal"
import { wallets as initialWallets } from "../../data/wallets"
import { categories as initialCategories } from "../../data/categories"
type DashboardProps = {
  title: string
}

function Dashboard({ title }: DashboardProps) {
  const [transactions, setTransactions] = useState(
    initialTransactions
  )
  const [wallets] = useState(initialWallets)
  const [categories] = useState(initialCategories)
  const [isModalOpen, setIsModalOpen] = useState(false)
  function handleDeleteTransaction(id: number) {
    setTransactions((currentTransactions) =>
      currentTransactions.filter(
        (transaction) => transaction.id !== id
      )
    )
  }
  const currentDate = new Date()
  const currentMonth = currentDate.getMonth()
  const currentYear = currentDate.getFullYear()
  const monthlyTransactions = filterTransactionsByMonth(
  transactions,
  currentMonth,
  currentYear
  )
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
      {isModalOpen && (
        <TransactionModal
          wallets={wallets}
          categories={categories}
        />
      )}
      <TransactionHistory
        transactions={transactions}
        onDeleteTransaction={handleDeleteTransaction}
        onEditTransaction={() => {}}
        onOpenModal={() => setIsModalOpen(true)}
      />
    </section>
  )
}

export default Dashboard