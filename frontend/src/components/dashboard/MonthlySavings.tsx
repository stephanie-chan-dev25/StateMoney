type MonthlySavingsProps = {
  amount: number
}

function MonthlySavings({ amount }: MonthlySavingsProps) {
  return (
    <section>
      <h3>💵 Épargne du mois</h3>
      <p>{amount} Ar</p>
    </section>
  )
}

export default MonthlySavings