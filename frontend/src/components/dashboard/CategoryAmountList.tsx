import type { CategoryAmount } from "../../types/categoryAmount"

type CategoryAmountListProps = {
  items: CategoryAmount[]
}

function CategoryAmountList({
  items,
}: CategoryAmountListProps) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.category}>
          <span>{item.category}</span>
          {" : "}
          <span>{item.amount.toLocaleString("fr-FR")} Ar</span>
        </li>
      ))}
    </ul>
  )
}

export default CategoryAmountList