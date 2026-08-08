import { useLocation } from "react-router-dom"


function Header() {
  const location = useLocation()

  const pageTitles: Record<string, string> = {
    "/": "Tableau de bord",
    "/wallets": "Portefeuilles",
    "/transactions": "Transactions récurrentes",
    "/categories": "Catégories",
    "/goals": "Objectifs",
  }

  const title = pageTitles[location.pathname] ?? "StateMoney"

  return (
    <header className="header">
      <h1>{title}</h1>
    </header>
  )
}


export default Header