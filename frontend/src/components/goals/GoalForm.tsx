import { useState } from "react"
import type { Goal } from "../../types/goal"
import "./GoalForm.css"

type GoalFormProps = {
  onClose: () => void
  onAddGoal: (
    name: string,
    targetAmount: number
  ) => void
  onEditGoal: (
    id: number,
    name: string,
    targetAmount: number
  ) => void
  selectedGoal: Goal | null
}

function GoalForm({
  onClose,
  onAddGoal,
  onEditGoal,
  selectedGoal,
}: GoalFormProps) {
  const [name, setName] = useState(
    selectedGoal?.name ?? ""
  )

  const [targetAmount, setTargetAmount] =
    useState(
      selectedGoal?.targetAmount ?? 0
    )

  function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault()

    if (
      name.trim() === "" ||
      targetAmount <= 0
    ) {
      return
    }

    const trimmedName = name.trim()

    if (selectedGoal) {
      onEditGoal(
        selectedGoal.id,
        trimmedName,
        targetAmount
      )
    } else {
      onAddGoal(
        trimmedName,
        targetAmount
      )
    }

    setName("")
    setTargetAmount(0)
    onClose()
  }

  return (
    <form
      className="goal-form"
      onSubmit={handleSubmit}
    >
      <h2>
        {selectedGoal
          ? "Modifier l'objectif"
          : "Nouvel objectif"}
      </h2>

      <div className="goal-form-field">
        <label htmlFor="name">
          Nom
        </label>

        <input
          id="name"
          name="name"
          type="text"
          value={name}
          onChange={(event) =>
            setName(event.target.value)
          }
          autoFocus
        />
      </div>

      <div className="goal-form-field">
        <label htmlFor="targetAmount">
          Montant cible
        </label>

        <input
          id="targetAmount"
          name="targetAmount"
          type="number"
          min="1"
          value={targetAmount}
          onChange={(event) =>
            setTargetAmount(
              Number(event.target.value)
            )
          }
        />
      </div>

      <div className="goal-form-actions">
        <button
          type="button"
          className="goal-form-cancel"
          onClick={onClose}
        >
          Annuler
        </button>

        <button
          type="submit"
          className="goal-form-submit"
        >
          {selectedGoal
            ? "Modifier"
            : "Ajouter"}
        </button>
      </div>
    </form>
  )
}

export default GoalForm