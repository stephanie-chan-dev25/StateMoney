import "./Dashboard.css"
import CategoryAmountList from "./CategoryAmountList"
import type { CategoryAmount } from "../../types/categoryAmount"

type MonthlyIncomeProps = {
  amount: number
  incomes: CategoryAmount[]
}

function MonthlyIncome({
  amount,
  incomes,
}: MonthlyIncomeProps) {  return (
    <section className="dashboard-card">
      <h3>📥 Revenus du mois</h3>
      <p>{amount.toLocaleString("fr-FR")} Ar</p>
      <CategoryAmountList items={incomes} />
    </section>
  )
}

export default MonthlyIncome