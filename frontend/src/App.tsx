import { Routes, Route } from "react-router-dom"
import WalletsPage from "./pages/WalletsPage"
import DashboardPage from "./pages/DashboardPage"
import TransactionsPage from "./pages/TransactionsPage"
import MainLayout from "./layouts/MainLayout"
import CategoriesPage from "./pages/CategoriesPage"
import GoalsPage from "./pages/GoalsPage"
import LoginPage from "./pages/LoginPage"


function App() {
  return (
    <main>
      <Routes>

        <Route
          path="/login"
          element={<LoginPage />}
        />

        <Route element={<MainLayout />}>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/wallets" element={<WalletsPage />} />
          <Route path="/transactions" element={<TransactionsPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/goals" element={<GoalsPage />} />
        </Route>

      </Routes>
    </main>
  )
}


export default App