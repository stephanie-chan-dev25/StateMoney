import type { Goal } from "../../types/goal"
import { getGoalStatus } from "../../utils/goalCalculations"

type GoalTableProps = {
  goals: Goal[]
  totalBalance: number
  onDeleteGoal: (id: number) => void
  onEditGoal: (goal: Goal) => void
}

function GoalTable({
  goals,
  totalBalance,
  onDeleteGoal,
  onEditGoal,
}: GoalTableProps) { return (
    <table>
      <thead>
        <tr>
          <th>Objectif</th>
          <th>Montant cible</th>
          <th>Statut</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        {goals.map((goal) => (
          <tr key={goal.id}>
            <td>{goal.name}</td>
            <td>{goal.targetAmount.toLocaleString("fr-FR")} Ar</td>
            <td>{getGoalStatus(goal, totalBalance) ? "Atteint" : "Non atteint"}</td>
            <td>
              <button
                type="button"
                aria-label="Modifier"
                onClick={() => onEditGoal(goal)}
              >
                ✏️
              </button>

              <button
                type="button"
                aria-label="Supprimer"
                onClick={() => onDeleteGoal(goal.id)}
              >
                🗑️
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default GoalTable