import { Router } from "express"

import {
  getTransactions,
  createTransactionController,
  deleteTransactionController,
  updateTransactionController
} from "../controllers/transactionController"

const router = Router()
router.put("/:id", updateTransactionController)
router.delete("/:id", deleteTransactionController)
router.post("/", createTransactionController)
router.get("/", getTransactions)

export default router