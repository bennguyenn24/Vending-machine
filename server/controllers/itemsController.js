const db = require("../db/index");

async function getAllItems(req, res) {
    const { rows } = await db.query("SELECT * FROM products");

    res.json({
        data: rows,
    });
}

async function postItem(req, res) {
    const { name, price, type, quantity } = req.body;

    const { rows } = await db.query(
        "INSERT INTO products(name, price, type, quantity) VALUES ($1, $2, $3, $4) RETURNING *",
        [name, price, type, quantity]
    );

    res.json({
        success: true,
        data: rows,
    });
}

module.exports = { getAllItems, postItem };
