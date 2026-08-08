import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import "./RegisterPage.css"

export default function RegisterPage() {
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  async function handleRegister(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault()

    setError("")

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

    const data = await response.json()

    if (!response.ok) {
      setError(
        data.message ||
          "Erreur lors de l'inscription"
      )
      return
    }

    navigate("/login")
  }

  return (
    <main className="auth-page">
      <section className="auth-card">
        <h1>Inscription</h1>

        {error && (
          <p className="auth-error">
            {error}
          </p>
        )}

        <form onSubmit={handleRegister}>
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
            S'inscrire
          </button>

          <p className="auth-link">
            Vous avez déjà un compte ?{" "}
            <Link to="/login">
              Se connecter
            </Link>
          </p>
        </form>
      </section>
    </main>
  )
}