import "./Dashboard.css"
import CategoryAmountList from "./CategoryAmountList"
import type { CategoryAmount } from "../../types/categoryAmount"
type MonthlyExpensesProps = {
  amount: number
  expenses: CategoryAmount[]
}

function MonthlyExpenses({
  amount,
  expenses,
}: MonthlyExpensesProps) {
  return (
    <section className="dashboard-card">
      <h3>📤 Dépenses du mois</h3>
      <p>{amount.toLocaleString("fr-FR")} Ar</p>
      <CategoryAmountList items={expenses} />
    </section>
  )
}

export default MonthlyExpenses