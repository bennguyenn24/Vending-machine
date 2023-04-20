const express = require("express");
const router = express.Router();
const db = require("../db/index");

router.get("/", async (req, res) => {
    // ROWS IS WHERE ALL INFO IS RETURNED
    const { rows } = await db.query("SELECT * FROM products");

    res.json({
        data: rows,
    });
});

module.exports = router;
