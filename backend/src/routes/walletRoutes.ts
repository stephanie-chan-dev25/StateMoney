import { Router } from "express"
import {
  getWallets,
  createWallet,
  updateWallet,
  deleteWallet,
} from "../controllers/walletController"

const router = Router()

router.get("/", getWallets)

router.post("/", createWallet)

router.put("/:id", updateWallet)

router.delete("/:id", deleteWallet)

export default router