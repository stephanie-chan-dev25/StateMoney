type MonthlyExpensesProps = {
  amount: number
}

function MonthlyExpenses({ amount }: MonthlyExpensesProps) {
  return (
    <section>
      <h3>📤 Dépenses du mois</h3>
      <p>{amount} Ar</p>
    </section>
  )
}

export default MonthlyExpenses