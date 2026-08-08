import "./Dashboard.css"
type TotalBalanceProps = {
  balance: number
}

function TotalBalance({ balance }: TotalBalanceProps) {
  return (
    <section className="dashboard-card">
      <h3>Solde total</h3>
      <p>{balance.toLocaleString("fr-FR")} Ar</p>
    </section>
  )
}

export default TotalBalance