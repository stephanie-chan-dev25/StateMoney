import "./Dashboard.css"
type MonthlyIncomeProps = {
  amount: number
}

function MonthlyIncome({ amount }: MonthlyIncomeProps) {
  return (
    <section className="dashboard-card">
      <h3>📥 Revenus du mois</h3>
      <p>{amount.toLocaleString("fr-FR")} Ar</p>
    </section>
  )
}

export default MonthlyIncome