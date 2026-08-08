import bcrypt from "bcrypt"

import {
  createUser,
  findUserByEmail,
  findUserById,
} from "../repositories/userRepository"


export async function getUserByEmail(
  email: string
) {
  return await findUserByEmail(email)
}


export async function addUser(user: {
  email: string
  password: string
}) {
  const hashedPassword = await bcrypt.hash(
    user.password,
    10
  )

  return await createUser({
    email: user.email,
    password: hashedPassword,
  })
}


export async function getUserById(
  id: number
) {
  return await findUserById(id)
}