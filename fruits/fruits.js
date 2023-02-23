const express = require("express");
const router = express.Router();
const {check, validationResult} = require("express-validator");

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

router.use(express.urlencoded({ extended: true }));

router.post("/", [check("color").not().isEmpty().trim()], async (req, res) => {
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            res.json({error: errors.array()});
        }else {
            const newFruit = req.body;
            fruits.push(newFruit);
            res.send(fruits);
        }
    } catch (error) {
        res.status(500).send({err: error.message})
    }
})

router.put("/:id", (req, res) => {
    try {
        let index = req.params.id - 1;
        fruits[index].name = req.body.name;
        fruits[index].color = req.body.color;
        res.send(fruits);
    } catch (error) {
        res.status(500).send({err: error.message})
    }
})

router.delete("/:id", (req, res) => {
    try {
        let index = req.params.id - 1;
        fruits.splice(index, 1);
        res.send(fruits);
    } catch (error) {
        res.status(500).send({err: error.message})
    }
})
module.exports = router;