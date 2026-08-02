import express from "express"
import transactionRoutes from "./routes/transactionRoutes"

const app = express()

app.use(express.json())

app.get("/", (req, res) => {
  res.json({
    message: "API StateMoney fonctionne",
  })
})

app.use("/transactions", transactionRoutes)

export default app