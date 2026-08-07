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
  return await createUser(user)
}

export async function getUserById(
  id: number
) {
  return await findUserById(id)
}