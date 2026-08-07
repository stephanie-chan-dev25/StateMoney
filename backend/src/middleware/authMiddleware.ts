import type { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    res.status(401).json({
      message: "Token manquant",
    })

    return
  }

  const token = authHeader.split(" ")[1]

  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET as string
    )
    
    if (typeof decoded === "object" && decoded !== null) {
      req.user = {
        id: decoded.id as number,
        email: decoded.email as string,
      }
    }
    
    next()
  } catch (error) {
    res.status(401).json({
      message: "Token invalide",
    })
  }
}