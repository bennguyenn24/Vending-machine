const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser")

const corsOptions = {
    origin: "http://localhost:5173",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

// Middlewares
app.use(cors(corsOptions));
app.use(bodyParser.json())

// Routes
const itemRoutes = require("./routes/itemRoutes");
app.use("/api/items", itemRoutes);

app.listen(3000, () => console.log("Server is running on PORT 3000"));
