const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

app.get('/soma', (req, res) => {
    const headers = req.headers
    console.log(headers)

   // const soma = body.n1 + body.n2
    res.send(`O resultado da soma é`)


})

app.listen(3333, () => console.log("servidor aberto") )