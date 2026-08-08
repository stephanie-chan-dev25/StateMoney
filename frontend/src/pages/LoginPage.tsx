import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { saveToken } from "../services/authService"


export default function LoginPage() {
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")


  async function handleLogin(
    event: React.FormEvent
  ) {
    event.preventDefault()

    setError("")

    const response = await fetch(
      "http://localhost:3000/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      }
    )

    const data = await response.json()

    if (!response.ok) {
      setError(
        data.message || "Email ou mot de passe incorrect"
      )
      return
    }

    saveToken(data.token)

    navigate("/")
  }


  return (
    <form onSubmit={handleLogin}>
      <h1>Connexion</h1>

      {error && (
        <p>{error}</p>
      )}

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />

      <input
        type="password"
        placeholder="Mot de passe"
        value={password}
        onChange={(e) =>
          setPassword(e.target.value)
        }
      />

      <button type="submit">
        Se connecter
      </button>
    </form>
  )
}