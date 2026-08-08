import type { Goal } from "../../types/goal"
import { getGoalStatus } from "../../utils/goalCalculations"
import "./GoalTable.css"

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
}: GoalTableProps) {
  return (
    <section className="goal-table">
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
          {goals.map((goal) => {
            const isReached = getGoalStatus(
              goal,
              totalBalance
            )

            return (
              <tr key={goal.id}>
                <td>{goal.name}</td>

                <td>
                  {goal.targetAmount.toLocaleString(
                    "fr-FR"
                  )}{" "}
                  Ar
                </td>

                <td>
                  <span
                    className={
                      isReached
                        ? "goal-status-reached"
                        : "goal-status-neutral"
                    }
                  >
                    {isReached
                      ? "Atteint"
                      : "Non atteint"}
                  </span>
                </td>

                <td className="goal-actions">
                  <button
                    type="button"
                    className="goal-action-button"
                    aria-label="Modifier"
                    onClick={() =>
                      onEditGoal(goal)
                    }
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 20h9" />
                      <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
                    </svg>
                  </button>

                  <button
                    type="button"
                    className="goal-action-button"
                    aria-label="Supprimer"
                    onClick={() =>
                      onDeleteGoal(goal.id)
                    }
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 6h18" />
                      <path d="M8 6V4h8v2" />
                      <path d="M19 6l-1 14H6L5 6" />
                      <path d="M10 11v5" />
                      <path d="M14 11v5" />
                    </svg>
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </section>
  )
}

export default GoalTable