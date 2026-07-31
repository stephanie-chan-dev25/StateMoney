import "./TotalBalance.css"
type TotalBalanceProps = {
  balance: number
}

function TotalBalance({ balance }: TotalBalanceProps) {
  return (
    <section className="total-balance">
      <h3>💰 Solde total</h3>
      <p>{balance.toLocaleString("fr-FR")} Ar</p>
    </section>
  )
}

export default TotalBalance