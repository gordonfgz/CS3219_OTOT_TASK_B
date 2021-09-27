const express = require('express');
//const cors = require("cors");

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//app.use(cors());

const PORT = process.env.PORT || 3000;

module.exports = app

var users = [
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
        if (Object.keys(user).length == 2) {
            const {name} = req.body.name
            const {age} = req.body.age
            users.push(user);
            res.status(201).send(users);
        } else {
            res.send("WRONG INPUTS")
        }
    } catch (e) {
        console.log(e.message)
        res.status(404).send("error")
    }
})

app.put('/users/:id', (req, res) => {
    try {
        const {id} = req.params;
        users[parseInt(id)] = req.body
        res.status(201).send(users);
    } catch (e) {
        console.log(e.message)
        res.status(404).send("error")
    }
})

app.delete('/users/:id', (req, res) => {
    try {
        const {id} = parseInt(req.params);
        users.splice(id, 1)
        res.status(201).send(users);
    } catch (e) {
        console.log(e.message)
        res.status(404).send("error")
    }
})










app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})