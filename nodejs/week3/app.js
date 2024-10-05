import knex from "knex";
import dotenv from "dotenv";
dotenv.config();
import express from "express";

const knexInstance = knex({
  client: "mysql2",
  connection: {
    host: process.env.DB_HOST || "127.0.0.1",
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME || "hyf_node_week3_warmup",
    multipleStatements: true,
  },
});

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const apiRouter = express.Router();
app.use("/api", apiRouter);

const contactsAPIRouter = express.Router();
apiRouter.use("/contacts", contactsAPIRouter);

contactsAPIRouter.get("/", async (req, res) => {
  let query = knexInstance.select("*").from("contacts");

  const allowedSortColumns = [
    "id",
    "first_name",
    "last_name",
    "email",
    "phone",
  ];

  if ("sort" in req.query) {
    const orderBy = req.query.sort.toString().toLowerCase();
    const [column, direction] = orderBy.split(" ");
    const sortDirection = direction ? direction : "asc";

    if (allowedSortColumns.includes(column) && ["asc", "desc"].includes(sortDirection)) {
      query = query.orderBy(column, sortDirection);
    } else {
      return res.status(400).json({ error: "Invalid sort parameters" });
    }
  }

  console.log("SQL", query.toSQL().sql);

  try {
    const data = await query;
    res.json({ data });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});