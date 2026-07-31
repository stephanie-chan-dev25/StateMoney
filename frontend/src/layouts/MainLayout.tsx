import { Outlet } from "react-router-dom"
import Header from "../components/Header"

function MainLayout() {
  return (
    <main>
      <Header />
      <Outlet />
    </main>
  )
}

export default MainLayout