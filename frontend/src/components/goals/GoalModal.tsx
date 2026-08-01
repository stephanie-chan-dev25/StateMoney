import GoalForm from "./GoalForm"
type GoalModalProps = {
  onClose: () => void
}
function GoalModal({
  onClose,
}: GoalModalProps) {
  return (
    <div className="goal-modal-overlay">
      <div className="goal-modal">
        <GoalForm onClose={onClose} />
      </div>
    </div>
  )
}

export default GoalModal