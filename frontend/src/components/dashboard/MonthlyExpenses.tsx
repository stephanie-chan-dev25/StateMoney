import "./Dashboard.css"
type MonthlyExpensesProps = {
  amount: number
}

function MonthlyExpenses({ amount }: MonthlyExpensesProps) {
  return (
    <section className="dashboard-card">
      <h3>📤 Dépenses du mois</h3>
      <p>{amount.toLocaleString("fr-FR")} Ar</p>
    </section>
  )
}

export default MonthlyExpenses