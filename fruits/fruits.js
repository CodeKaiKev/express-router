const express = require("express")
const router = express.Router()

// List of Fruits
let fruits = [
    {
        name: "Apple",
        color: "Red"
    },
    {
        name: "Banana",
        color: "Yellow"
    },
    {
        name: "Kiwi",
        color: "Green"
    },
    {
        name: "Grape",
        color: "Purple"
    },
]

router.get("/", (req, res) => {
    res.json(fruits);
})

router.get("/:id", (req, res) => {
    const fruit = fruits[req.params.id -1]
    res.json(fruit);
})

module.exports = router;