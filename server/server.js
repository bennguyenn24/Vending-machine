const express = require("express");
const app = express();
const cors = require("cors");

const corsOptions = {
    origin: "http://localhost:5173",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));

// Routes
const itemRoutes = require("./routes/itemRoutes");

app.use("/api/items", itemRoutes);

// app.post("/api/snacks", async (req, res) => {
//     // ROWS IS WHERE ALL INFO IS RETURNED
//     const { rows } = await db.query("SELECT * FROM products");

//     res.json({
//         data: rows,
//     });
// });

app.listen(3000, () => console.log("Server is running on PORT 3000"));
