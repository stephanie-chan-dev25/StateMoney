import type { Goal } from "../../types/goal"
import { getGoalStatus } from "../../utils/goalCalculations"

type GoalTableProps = {
  goals: Goal[]
  totalBalance: number
}

function GoalTable({ goals, totalBalance }: GoalTableProps) {
  return (
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
              <button type="button" aria-label="Modifier">
                ✏️
              </button>

              <button type="button" aria-label="Supprimer">
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