import express from "express"
import express from "express"
import cors from "cors"
import transactionRoutes from "./routes/transactionRoutes"
import walletRoutes from "./routes/walletRoutes"
import categoryRoutes from "./routes/categoryRoutes"
import goalRoutes from "./routes/goalRoutes"
const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  res.json({
    message: "API StateMoney fonctionne",
  })
})

app.use("/transactions", transactionRoutes)
app.use("/wallets", walletRoutes)
app.use("/categories", categoryRoutes)
app.use("/goals", goalRoutes)
export default app

