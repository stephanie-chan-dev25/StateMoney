import "./MonthlyExpenses.css"
type MonthlyExpensesProps = {
  amount: number
}

function MonthlyExpenses({ amount }: MonthlyExpensesProps) {
  return (
    <section className="monthly-expenses">
      <h3>📤 Dépenses du mois</h3>
      <p>{amount.toLocaleString("fr-FR")} Ar</p>
    </section>
  )
}

export default MonthlyExpenses