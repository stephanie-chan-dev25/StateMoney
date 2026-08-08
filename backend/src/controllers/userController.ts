import type { Request, Response } from "express"
import jwt from "jsonwebtoken"
import {
  addUser,
  getUserByEmail,
} from "../services/userService"
import bcrypt from "bcrypt"
export async function register(
  req: Request,
  res: Response
) {
  try {
    const { email, password } = req.body
    if (
      typeof email !== "string" ||
      typeof password !== "string" ||
      !email.trim() ||
      !password.trim()
    ) {
      res.status(400).json({
        message: "Email et mot de passe obligatoires",
      })
    
      return
    }
    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!emailRegex.test(email)) {
      res.status(400).json({
        message: "Format d'email invalide",
      })
    
      return
    }
    if (password.length < 8) {
      res.status(400).json({
        message: "Le mot de passe doit contenir au moins 8 caractères",
      })
    
      return
    }
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
    if (
      typeof email !== "string" ||
      typeof password !== "string" ||
      !email.trim() ||
      !password.trim()
    ) {
      res.status(400).json({
        message: "Email et mot de passe obligatoires",
      })
    
      return
    }
    
    const user = await getUserByEmail(email)

    if (!user) {
      res.status(401).json({
        message: "Email ou mot de passe incorrect",
      })

      return
    }

    const passwordIsValid = await bcrypt.compare(
      password,
      user.password
    )

    if (!passwordIsValid) {
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