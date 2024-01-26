import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const express = require("express");
const mysql = require("mysql");

const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "opteetcg_wp1",
  password: "J14ng5Hi",
  database: "opteetCG_dailymission",
});

app.get("/get-table-names", (req, res) => {
  db.query("SHOW TABLES", (error, results) => {
    if (error) throw error;
    res.send(results);
  });
});

const port = 3306;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
