import { useState } from "react"
import { saveToken } from "../services/authService"
import "./LoginPage.css"
import { Link, useNavigate } from "react-router-dom"

export default function LoginPage() {
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  async function handleLogin(
    event: React.FormEvent<HTMLFormElement>
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
        data.message ||
          "Email ou mot de passe incorrect"
      )
      return
    }

    saveToken(data.token)

    navigate("/")
  }

  return (
    <main className="auth-page">
      <section className="auth-card">
        <h1>Connexion</h1>

        {error && (
          <p className="auth-error">
            {error}
          </p>
        )}

        <form onSubmit={handleLogin}>
          <div className="auth-field">
            <label htmlFor="email">
              Email
            </label>

            <input
              id="email"
              type="email"
              placeholder="Votre email"
              value={email}
              onChange={(event) =>
                setEmail(event.target.value)
              }
            />
          </div>

          <div className="auth-field">
            <label htmlFor="password">
              Mot de passe
            </label>

            <input
              id="password"
              type="password"
              placeholder="Votre mot de passe"
              value={password}
              onChange={(event) =>
                setPassword(event.target.value)
              }
            />
          </div>

          <button
            type="submit"
            className="auth-submit"
          >
            Se connecter
          </button>
          <p className="auth-link">
            Vous n'avez pas encore de compte ?{" "}
            <Link to="/register">S'inscrire</Link>
          </p>
        </form>
      </section>
    </main>
  )
}