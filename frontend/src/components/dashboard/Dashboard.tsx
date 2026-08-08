import { 
  createTransaction,
  deleteTransaction,
  updateTransaction
 } from "../../services/transactionService"
import type { Transaction } from "../../types/transaction"
import MonthlyExpenses from "./MonthlyExpenses"
import MonthlyIncome from "./MonthlyIncome"
import MonthlySavings from "./MonthlySavings"
import TotalBalance from "./TotalBalance"
import TransactionHistory from "./transactions/TransactionHistory"
import { useEffect, useState } from "react"
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
import { getWallets } from "../../services/walletService"
import type { Wallet } from "../../types/wallet"
import { getCategories } from "../../services/categoryService"
import type { Category } from "../../types/category"
import { getTransactions } from "../../services/transactionService"
type DashboardProps = {
  title: string
}

function Dashboard({ title }: DashboardProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  useEffect(() => {
    async function loadTransactions() {
      try {
        const data = await getTransactions()
        setTransactions(data)
      } catch (error) {
        console.error(
          "Erreur chargement transactions",
          error
        )
      }
    }
  
    loadTransactions()
  }, [])
  function handleCloseModal() {
    setIsModalOpen(false)
    setEditingTransaction(null)
  }
  async function handleAddTransaction(transaction: Transaction) {
    try {
      const savedTransaction = await createTransaction({
        amount: transaction.amount,
        date: transaction.date,
        description: transaction.description,
        categoryId: transaction.categoryId,
        walletId: transaction.walletId,
      })

      setTransactions((currentTransactions) => [
        ...currentTransactions,
        {
          id: savedTransaction.id,
          amount: Number(savedTransaction.amount),
          date: new Date(savedTransaction.date),
          description: savedTransaction.description,
          categoryId: savedTransaction.category_id,
          walletId: savedTransaction.wallet_id,
        },
      ])
    } catch (error) {
      console.error("Erreur :", error)
      alert("Impossible d'ajouter la transaction.")
    }
  }
  const [wallets, setWallets] = useState<Wallet[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  useEffect(() => {
    async function loadWallets() {
      try {
        const data = await getWallets()
        setWallets(data)
      } catch (error) {
        console.error(error)
      }
    }
  
    loadWallets()
  }, [])
  useEffect(() => {
    async function loadCategories() {
      try {
        const data = await getCategories()
        setCategories(data)
      } catch (error) {
        console.error(error)
      }
    }
  
    loadCategories()
  }, [])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingTransaction, setEditingTransaction] =
  useState<Transaction | null>(null)
  async function handleDeleteTransaction(id: number) {
    try {
      await deleteTransaction(id)

      setTransactions((currentTransactions) =>
        currentTransactions.filter(
          (transaction) => transaction.id !== id
        )
      )
    } catch (error) {
      console.error(error)
      alert("Impossible de supprimer la transaction.")
    }
  }
  function handleEditTransaction(transaction: Transaction) {
    setEditingTransaction(transaction)
    setIsModalOpen(true)
  }
  async function handleUpdateTransaction(
    updatedTransaction: Transaction
  ) {
    try {
      const savedTransaction =
        await updateTransaction(updatedTransaction)
    
      const formattedTransaction: Transaction = {
        id: savedTransaction.id,
        amount: Number(savedTransaction.amount),
        date: new Date(savedTransaction.date),
        description: savedTransaction.description,
        categoryId: savedTransaction.category_id,
        walletId: savedTransaction.wallet_id,
      }
    
      setTransactions((currentTransactions) =>
        currentTransactions.map((transaction) =>
          transaction.id === formattedTransaction.id
            ? formattedTransaction
            : transaction
        )
      )
    } catch (error) {
      console.error(error)
      alert("Impossible de modifier la transaction.")
    }
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