import { render, screen } from "@testing-library/react"
import TotalBalance from "./TotalBalance"

test("affiche le solde total", () => {
  render(
    <TotalBalance balance={5000} />
  )

  expect(
    screen.getByText("5 000 Ar")
  ).toBeInTheDocument()
})