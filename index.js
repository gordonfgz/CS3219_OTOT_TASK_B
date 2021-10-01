const e = require('express');
const express = require('express');
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(cors());

const PORT = process.env.PORT || 3000;

module.exports = app

var users = [
    { Id: 1, Name: 'Jeremy', Age: 22},
    { Id: 2, Name: 'Kelvin', Age: 21}
]

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/users', (req, res) => {
    res.status(200).json(users)
})

app.post('/', (req, res) => {
    try {
        const user = req.body;
        if (Object.keys(user).length == 3) {
            const {Id} = req.body.Id
            const {Name} = req.body.Name
            const {Age} = req.body.Age
            users.push(user);
            res.status(201).send(users);
        } else {
            res.send("TOO MANY INPUTS")
        }
    } catch (e) {
        console.log(e.message)
        res.status(404).send("error")
    }
})

app.put('/users/:index', (req, res) => { //update based on array index
    try {
        const user = req.body;
        if (Object.keys(user).length == 3) {
            const {Id} = req.body.Id
            const {Name} = req.body.Name
            const {Age} = req.body.Age
            const {index} = req.params;
            users[parseInt(index)] = req.body
            res.status(201).send(users);
        } else {
            res.send("TOO MANY INPUTS")
        }
    } catch (e) {
        console.log(e.message)
        res.status(404).send("error")
    }
})

app.delete('/users/:id', (req, res) => { //delete based on array index
    try {
        const {id} = req.params;
        if (id < users.length && id >= 0) {
            users.splice(id, 1)
            res.status(201).send(users);
        } else {
            res.send("Index out of bounds");
        }
    } catch (e) {
        console.log(e.message)
        res.status(404).send("error")
    }
})

app.put('/users', (req, res) => {
    try {
        users = req.body
        res.json(users)
    } catch (e) {
        console.log(e.message)
        res.status(404).send("error")
    }
})













app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})