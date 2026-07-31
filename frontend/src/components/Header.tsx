import { Link } from "react-router-dom"
function Header() {
  return (
    <header>
      <h1>Bienvenue sur StateMoney</h1>

      <nav>
        <Link to="/">Tableau de bord</Link>
        {" | "}
        <Link to="/wallets">Portefeuilles</Link>
        {" | "}
        <Link to="/transactions">Transactions</Link>
        {" | "}
        <Link to="/categories">Catégories</Link> 
        {" | "}
        <Link to="/goals">Objectifs</Link> 
      </nav>
    </header>
  )
}

export default Header