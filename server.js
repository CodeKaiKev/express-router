const express = require("express")
const app = express()
const port = 3000



// Express Routes

const fruitRouter = require("./fruits/fruits");
const userRouter = require("./users/users");

app.use("/fruits", fruitRouter);
app.use("/users", userRouter);


app.listen(port, () => {
    console.log(`App listening on port http://localhost:${port}/users`)
})
