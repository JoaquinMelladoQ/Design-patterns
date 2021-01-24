// INVERSION OF CONTROL

const express = require('express')
const axios = require('axios')
const { get } = require('./handlersIoc')
const app = express()
const port = 3000


app.get('/', get(axios))

app.listen(part, () => console.log(`example app listener on port ${port}!`))

