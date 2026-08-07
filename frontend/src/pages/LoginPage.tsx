import { useState } from "react"
import { saveToken } from "../services/authService"


export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  async function handleLogin(
    event: React.FormEvent
  ) {
    event.preventDefault()

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

    saveToken(data.token)

    window.location.href = "/"
  }


  return (
    <form onSubmit={handleLogin}>
      <h1>Connexion</h1>

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