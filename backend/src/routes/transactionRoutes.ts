import { Router } from "express"

import {
  getTransactions,
  createTransactionController,
  deleteTransactionController,
  updateTransactionController
} from "../controllers/transactionController"

import { authMiddleware } from "../middleware/authMiddleware"


const router = Router()

router.use(authMiddleware)

router.put("/:id", updateTransactionController)
router.delete("/:id", deleteTransactionController)
router.post("/", createTransactionController)
router.get("/", getTransactions)

export default router