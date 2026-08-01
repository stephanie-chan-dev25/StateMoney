type GoalFormProps = {
  onClose: () => void
}
function GoalForm({ onClose }: GoalFormProps) {
  return (
    <form>
      <h2>Nouvel objectif</h2>

      <label htmlFor="name">Nom</label>
      <input
        id="name"
        name="name"
        type="text"
      />

      <label htmlFor="targetAmount">
        Montant cible
      </label>
      <input
        id="targetAmount"
        name="targetAmount"
        type="number" 
      />
      <button
        type="button"
        onClick={onClose}
      >
        Annuler
      </button>
      <button type="submit">
        Ajouter
      </button>
    </form>
  )
}

export default GoalForm