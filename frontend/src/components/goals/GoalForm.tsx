import { useState } from "react"
import type { Goal } from "../../types/goal"
type GoalFormProps = {
  onClose: () => void
  onAddGoal: (name: string, targetAmount: number) => void
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

  const [targetAmount, setTargetAmount] = useState(
    selectedGoal?.targetAmount ?? 0
  )
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        if (name.trim() === "" || targetAmount <= 0) {
        return
        }
        if (selectedGoal) {
          onEditGoal(
            selectedGoal.id,
            name,
            targetAmount
          )
        } else {
          onAddGoal(name, targetAmount)
        }
        setName("")
        setTargetAmount(0)
        onClose()
      }}
    >
      <h2>
        {selectedGoal
          ? "Modifier l'objectif"
          : "Nouvel objectif"}
      </h2>

      <label htmlFor="name">Nom</label>
      <input
        id="name"
        name="name"
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <label htmlFor="targetAmount">
        Montant cible
      </label>
      <input
        id="targetAmount"
        name="targetAmount"
        type="number"
        value={targetAmount}
        onChange={(event) =>
          setTargetAmount(Number(event.target.value))
        }
      />
      <button
        type="button"
        onClick={onClose}
      >
        Annuler
      </button>
      <button type="submit">
        {selectedGoal ? "Modifier" : "Ajouter"}
      </button>
    </form>
  )
}

export default GoalForm