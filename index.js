const express = require('express');
//const cors = require("cors");

const app = express();
app.use(express.json());
//app.use(cors());

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/', (req, res) => {
    output = req.body
    res.send(body)
  })

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})