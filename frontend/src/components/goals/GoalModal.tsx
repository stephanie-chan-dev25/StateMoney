import type { Goal } from "../../types/goal"
import GoalForm from "./GoalForm"
type GoalModalProps = {
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
function GoalModal({
  onClose,
  onAddGoal,
  onEditGoal,
  selectedGoal,
}: GoalModalProps) {
  return (
    <div className="goal-modal-overlay">
      <div className="goal-modal">
        <GoalForm
          onClose={onClose}
          onAddGoal={onAddGoal}
          onEditGoal={onEditGoal}
          selectedGoal={selectedGoal}
        />
      </div>
    </div>
  )
}

export default GoalModal