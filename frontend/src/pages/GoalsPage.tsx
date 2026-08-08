import GoalTable from "../components/goals/GoalTable"
import { calculateBalance } from "../utils/transactionCalculations"
import { useEffect, useState } from "react"
import type { Transaction } from "../types/transaction"
import { getTransactions } from "../services/transactionService"
import "./GoalsPage.css"
import GoalModal from "../components/goals/GoalModal"
import type { Goal } from "../types/goal"
import type { Category } from "../types/category"
import { getCategories } from "../services/categoryService"
import {
  getGoals,
  createGoal,
  updateGoal,
  deleteGoal,
} from "../services/goalService"

function GoalsPage() {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [goals, setGoals] = useState<Goal[]>([])

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedGoal, setSelectedGoal] =
    useState<Goal | null>(null)

  useEffect(() => {
    async function loadData() {
      try {
        const [
          transactionsData,
          categoriesData,
          goalsData,
        ] = await Promise.all([
          getTransactions(),
          getCategories(),
          getGoals(),
        ])

        setTransactions(transactionsData)
        setCategories(categoriesData)
        setGoals(goalsData)
      } catch (error) {
        console.error(error)
      }
    }

    loadData()
  }, [])

  const totalBalance = calculateBalance(
    transactions,
    categories
  )

  async function handleAddGoal(
    name: string,
    targetAmount: number
  ) {
    try {
      const goal = await createGoal({
        name,
        targetAmount,
      })

      setGoals((currentGoals) => [
        ...currentGoals,
        goal,
      ])
    } catch (error) {
      console.error(error)
    }
  }

  async function handleDeleteGoal(id: number) {
    try {
      await deleteGoal(id)

      setGoals((currentGoals) =>
        currentGoals.filter(
          (goal) => goal.id !== id
        )
      )
    } catch (error) {
      console.error(error)
    }
  }

  async function handleEditGoal(
    id: number,
    name: string,
    targetAmount: number
  ) {
    try {
      const goal = await updateGoal(id, {
        name,
        targetAmount,
      })

      setGoals((currentGoals) =>
        currentGoals.map((currentGoal) =>
          currentGoal.id === id
            ? goal
            : currentGoal
        )
      )
    } catch (error) {
      console.error(error)
    }
  }

  function handleOpenEdit(goal: Goal) {
    setSelectedGoal(goal)
    setIsModalOpen(true)
  }

  return (
    <section className="goals-page">
      <header className="goals-header">
        <button
          type="button"
          onClick={() => {
            setSelectedGoal(null)
            setIsModalOpen(true)
          }}
        >
          + Nouvel objectif
        </button>
      </header>

      {isModalOpen && (
        <GoalModal
          onClose={() =>
            setIsModalOpen(false)
          }
          onAddGoal={handleAddGoal}
          onEditGoal={handleEditGoal}
          selectedGoal={selectedGoal}
        />
      )}

      <GoalTable
        goals={goals}
        totalBalance={totalBalance}
        onDeleteGoal={handleDeleteGoal}
        onEditGoal={handleOpenEdit}
      />
    </section>
  )
}

export default GoalsPage