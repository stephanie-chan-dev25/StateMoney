import { Outlet, NavLink, useNavigate } from "react-router-dom"
import Header from "../components/Header"
import { removeToken } from "../services/authService"


function MainLayout() {
  const navigate = useNavigate()

  function handleLogout() {
    removeToken()
    navigate("/login")
  }

  return (
    <div className="main-layout">

      <aside className="sidebar">

        <div className="sidebar-logo">
          StateMoney
        </div>

        <nav className="sidebar-nav">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            Tableau de bord
          </NavLink>

          <NavLink
            to="/wallets"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            Portefeuilles
          </NavLink>

          <NavLink
            to="/transactions"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            Transactions récurrentes
          </NavLink>

          <NavLink
            to="/categories"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            Catégories
          </NavLink>

          <NavLink
            to="/goals"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            Objectifs
          </NavLink>
        </nav>

        <button
          type="button"
          onClick={handleLogout}
          className="logout-button"
        >
          Déconnexion
        </button>

      </aside>

      <div className="main-content">
        <Header />

        <main>
          <Outlet />
        </main>
      </div>

    </div>
  )
}


export default MainLayout