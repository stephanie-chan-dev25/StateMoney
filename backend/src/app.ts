import express from "express"
import express from "express"
import cors from "cors"
import transactionRoutes from "./routes/transactionRoutes"

const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  res.json({
    message: "API StateMoney fonctionne",
  })
})

app.use("/transactions", transactionRoutes)

export default app

