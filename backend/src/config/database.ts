import { Pool } from "pg"

const pool = new Pool({
  user: "statemoney_user",
  host: "localhost",
  database: "statemoney",
  password: "statemoney_password",
  port: 5432,
})

export default pool