type MonthlyIncomeProps = {
  amount: number
}

function MonthlyIncome({ amount }: MonthlyIncomeProps) {
  return (
    <section>
      <h3>📥 Revenus du mois</h3>
      <p>{amount} Ar</p>
    </section>
  )
}

export default MonthlyIncome