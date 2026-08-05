import GoalTable from "../components/goals/GoalTable"
import { goals as initialGoals } from "../data/goals"
import { calculateBalance } from "../utils/transactionCalculations";
import { useEffect, useState } from "react"
import type { Transaction } from "../types/transaction"
import { getTransactions } from "../services/transactionService"
import "./GoalsPage.css"
import GoalModal from "../components/goals/GoalModal"
import type { Goal } from "../types/goal"
import { categories } from "../data/categories"
function GoalsPage() {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    async function loadTransactions() {
      try {
        const data = await getTransactions()
        setTransactions(data)
      } catch (error) {
        console.error(error)
      }
    }

    loadTransactions()
  }, [])

  const totalBalance = calculateBalance(
    transactions,
    categories
  )
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [goals, setGoals] = useState(initialGoals)
  const [selectedGoal, setSelectedGoal] = useState<Goal | null>(null)
  function handleAddGoal(
  name: string,
  targetAmount: number
  ) {
    setGoals((currentGoals) => [
      ...currentGoals,
      {
        id: currentGoals.length + 1,
        name,
        targetAmount,
      },
    ])
  }
  function handleDeleteGoal(id: number) {
    setGoals((currentGoals) =>
      currentGoals.filter((goal) => goal.id !== id)
    )
  } 
  function handleEditGoal(
    id: number,
    name: string,
    targetAmount: number
  ) {
    setGoals((currentGoals) =>
      currentGoals.map((goal) =>
        goal.id === id
          ? {
              ...goal,
              name,
              targetAmount,
            }
          : goal
      )
    )
  }
  function handleOpenEdit(goal: Goal) {
    setSelectedGoal(goal)
    setIsModalOpen(true)
  }
  return (
    <section>
      <header className="goals-header">
        <h2>🎯 Objectifs financiers</h2>
    
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
          onClose={() => setIsModalOpen(false)}
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