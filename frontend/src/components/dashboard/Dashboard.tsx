import MonthlyExpenses from "./MonthlyExpenses"
import MonthlyIncome from "./MonthlyIncome"
import MonthlySavings from "./MonthlySavings";
import TotalBalance from "./TotalBalance"
import TransactionHistory from "./TransactionHistory";
type DashboardProps = {
  title: string
}

function Dashboard({ title }: DashboardProps) {
  const totalBalance = 2700000
  const monthlyIncome = 2500000
  const monthlyExpenses = 800000
  const monthlySavings = monthlyIncome - monthlyExpenses
  const transactions = [
    {
      id: 1,
      description: "Salaire",
      amount: 2000000,
      type: "revenu",
    },
    {
      id: 2,
      description: "Loyer",
      amount: 500000,
      type: "dépense",
    },
  ]
  return (
    <section>
      <h2>{title}</h2>

      <TotalBalance balance={totalBalance} />

      <MonthlyIncome amount={monthlyIncome} />

      <MonthlyExpenses amount={monthlyExpenses} />

      <MonthlySavings amount={monthlySavings} />

      <TransactionHistory transactions={transactions} />
    </section>
  )
}

export default Dashboard