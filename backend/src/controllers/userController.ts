import type { Request, Response } from "express"
import jwt from "jsonwebtoken"
import {
  addUser,
  getUserByEmail,
} from "../services/userService"

export async function register(
  req: Request,
  res: Response
) {
  try {
    const { email, password } = req.body

    const existingUser =
      await getUserByEmail(email)

    if (existingUser) {
      res.status(409).json({
        message: "Cet email est déjà utilisé.",
      })

      return
    }

    const user = await addUser({
      email,
      password,
    })

    res.status(201).json(user)
  } catch (error) {
    console.error(error)

    res.status(500).json({
      message: "Erreur création utilisateur",
    })
  }
}

export async function login(
  req: Request,
  res: Response
) {
  try {
    const { email, password } = req.body

    const user = await getUserByEmail(email)

    if (!user) {
      res.status(401).json({
        message: "Email ou mot de passe incorrect",
      })

      return
    }

    if (user.password !== password) {
      res.status(401).json({
        message: "Email ou mot de passe incorrect",
      })

      return
    }

    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
      },
      process.env.JWT_SECRET as string
    )
    
    res.json({
      token,
    })
  } catch (error) {
    console.error(error)

    res.status(500).json({
      message: "Erreur connexion utilisateur",
    })
  }
}