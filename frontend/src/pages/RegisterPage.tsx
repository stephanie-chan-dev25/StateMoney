import { useState } from "react"
import { useNavigate } from "react-router-dom"


export default function RegisterPage() {
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  async function handleRegister(
    event: React.FormEvent
  ) {
    event.preventDefault()
    const response = await fetch(
      "http://localhost:3000/auth/register",
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

    if (!response.ok) {
      throw new Error(
        "Erreur inscription"
      )
    }

    navigate("/login")
  }


  return (
    <form onSubmit={handleRegister}>
      <h1>Inscription</h1>

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
        S'inscrire
      </button>
    </form>
  )
}