import GoalTable from "../components/goals/GoalTable"
import { goals } from "../data/goals"
import { calculateBalance } from "../utils/transactionCalculations";
import { transactions } from "../data/transactions";
import "./GoalsPage.css"
import { useState } from "react"
import GoalModal from "../components/goals/GoalModal"
function GoalsPage() {
  const totalBalance = calculateBalance(transactions)
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <section>
      <header className="goals-header">
        <h2>🎯 Objectifs financiers</h2>
    
        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
        >
          + Nouvel objectif
        </button>
      </header>
      {isModalOpen && (
      <GoalModal
        onClose={() => setIsModalOpen(false)}
      />
    )}
    
      <GoalTable
        goals={goals}
        totalBalance={totalBalance}
      />
    </section>
  )
}

export default GoalsPage