type TotalBalanceProps = {
  balance: number
}

function TotalBalance({ balance }: TotalBalanceProps) {
  return (
    <section>
      <h3>💰 Solde total</h3>
      <p>{balance} Ar</p>
    </section>
  )
}

export default TotalBalance