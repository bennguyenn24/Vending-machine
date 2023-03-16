const express = require("express");
const app = express();

const db = require("./db/index");

app.get("/api/v1/snacks", async (req, res) => {
    // ROWS IS WHERE ALL INFO IS RETURNED
    const { rows } = await db.query("SELECT * FROM products");

    res.json({
        data: rows,
    });
});

app.listen(3000, () => console.log("Server is running on PORT 3000"));
