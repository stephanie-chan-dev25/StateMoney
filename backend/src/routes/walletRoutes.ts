import { Router } from "express"

import {
  getWallets,
  createWallet,
  updateWallet,
  deleteWallet,
} from "../controllers/walletController"

import { authMiddleware } from "../middleware/authMiddleware"


const router = Router()


router.get(
  "/",
  authMiddleware,
  getWallets
)

router.post(
  "/",
  authMiddleware,
  createWallet
)

router.put(
  "/:id",
  authMiddleware,
  updateWallet
)

router.delete(
  "/:id",
  authMiddleware,
  deleteWallet
)


export default router