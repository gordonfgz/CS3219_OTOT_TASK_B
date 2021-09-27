const express = require('express');
//const cors = require("cors");

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//app.use(cors());

const PORT = process.env.PORT || 3000;

const users = [
    { name: 'Jeremy', age: 22},
    { name: 'Kelvin', age: 21}
]

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/users', (req, res) => {
    res.status(200).send(users)
})

app.post('/', (req, res) => {
    try {
        const user = req.body;
        users.push(user);
        res.status(201).send(users);
    } catch (e) {
        console.log(e.message)
        res.status(404).send("error")
    }
})

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})