import { Link, useNavigate } from "react-router-dom"
import { removeToken } from "../services/authService"


function Header() {
  const navigate = useNavigate()


  function handleLogout() {
    removeToken()
    navigate("/login")
  }


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
        {" | "}

        <button
          type="button"
          onClick={handleLogout}
        >
          Déconnexion
        </button>
      </nav>
    </header>
  )
}


export default Header