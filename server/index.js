const express = require("express");
const dbconnection = require("./mongodb/dbconnection");
const cors = require("cors");
const router = require("./routes/createuser");

const app = express();
const port = 5000;

// Establish database connection
dbconnection();

// Middleware
app.use(cors()); // Allow cross-origin requests
app.use(express.json()); // Parse JSON request bodies

// Using router with a prefix
// app.use("/api", router);
app.use(router);

// Start the server
app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});
