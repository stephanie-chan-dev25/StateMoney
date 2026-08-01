import GoalTable from "../components/goals/GoalTable"
import { goals } from "../data/goals"
import { calculateBalance } from "../utils/transactionCalculations";
import { transactions } from "../data/transactions";
import "./GoalsPage.css"
function GoalsPage() {
  const totalBalance = calculateBalance(transactions)
  return (
    <section>
      <header className="goals-header">
        <h2>🎯 Objectifs financiers</h2>
    
        <button type="button">
          + Nouvel objectif
        </button>
      </header>
    
      <GoalTable
        goals={goals}
        totalBalance={totalBalance}
      />
    </section>
  )
}

export default GoalsPage