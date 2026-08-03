import type { Transaction } from "../../types/transaction"
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
  function handleCloseModal() {
    setIsModalOpen(false)
    setEditingTransaction(null)
  }
  function handleAddTransaction(transaction: Transaction) {
  setTransactions((currentTransactions) => [
    ...currentTransactions,
    transaction,
  ])
}
  const [wallets] = useState(initialWallets)
  const [categories] = useState(initialCategories)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingTransaction, setEditingTransaction] =
  useState<Transaction | null>(null)
  function handleDeleteTransaction(id: number) {
    setTransactions((currentTransactions) =>
      currentTransactions.filter(
        (transaction) => transaction.id !== id
      )
    )
  }
  function handleEditTransaction(transaction: Transaction) {
    setEditingTransaction(transaction)
    setIsModalOpen(true)
  }
  function handleUpdateTransaction(updatedTransaction: Transaction) {
    setTransactions((currentTransactions) =>
      currentTransactions.map((transaction) =>
        transaction.id === updatedTransaction.id
          ? updatedTransaction
          : transaction
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
  const incomeByCategory = calculateIncomeByCategory(
    monthlyTransactions,
    categories
  )
  
  const expensesByCategory = calculateExpensesByCategory(
    monthlyTransactions,
    categories
  )
  
  const totalBalance = calculateBalance(
    transactions,
    categories
  )
  
  const monthlyIncome = calculateIncome(
    monthlyTransactions,
    categories
  )
  
  const monthlyExpenses = calculateExpenses(
    monthlyTransactions,
    categories
  )
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
          editingTransaction={editingTransaction}
          onAddTransaction={handleAddTransaction}
          onUpdateTransaction={handleUpdateTransaction}
          onClose={handleCloseModal}
        />
      )}
      <TransactionHistory
        transactions={transactions}
        wallets={wallets}
        categories={categories}
        onDeleteTransaction={handleDeleteTransaction}
        onEditTransaction={handleEditTransaction}
        onOpenModal={() => setIsModalOpen(true)}
      />
    </section>
  )
}

export default Dashboard