const express = require("express")
const router = express.Router();
const {check, validationResult} = require("express-validator");

// List of Users
let users = [
    {
        name: "User 1",
        age: 30
    },
    {
        name: "User 2",
        age: 45
    },
    {
        name: "User 3",
        age: 27
    },
    {
        name: "User 4",
        age: 22
    }
]

router.get("/",  (req, res) => {
    res.json(users);
})

router.get("/:id", (req, res) => {
    const user = users[req.params.id -1]
    res.json(user);
})

router.use(express.urlencoded({ extended: true }));

router.post("/", [check("name").not().isEmpty().trim()], async (req, res) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        res.json({error: errors.array()});
    } else {
        const newUser = req.body;
        users.push(newUser);
        res.send(users);
    }

    
})

router.put("/:id", (req, res) => {
    let index = req.params.id - 1;
    users[index].name = req.body.name;
    users[index].age = req.body.age;
    res.send(users);
})

router.delete("/:id", (req, res) => {
    let index = req.params.id - 1;
    users.splice(index, 1);
    res.send(users);
})
module.exports = router;