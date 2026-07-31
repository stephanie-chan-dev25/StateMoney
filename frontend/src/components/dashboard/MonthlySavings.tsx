import "./MonthlySavings.css"
type MonthlySavingsProps = {
  amount: number
}

function MonthlySavings({ amount }: MonthlySavingsProps) {
  return (
    <section className="monthly-savings">
      <h3>💵 Épargne du mois</h3>
      <p>{amount.toLocaleString("fr-FR")} Ar</p>
    </section>
  )
}

export default MonthlySavings