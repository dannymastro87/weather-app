const express = require('express')
const app = express()
const port = 3000
var qs = require('qs')
const axios = require('axios')

const apiUrl = 'https://api.openweathermap.org/data/2.5/weather'

const apiKey = '81f6574e7776d515a26089460c62d399'

app.get('/', (request, response) => {
  response.set('Access-Control-Allow-Origin', '*')
  let query = request.query
  query.appid = apiKey
  let queryString = qs.stringify(query)
  axios(`${ apiUrl }?${ queryString }`).then(res => {
    response.send(res.data)
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})