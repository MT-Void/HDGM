const express = require('express')
const app = express()
const port = 8080

require('./routes')(app)

app.listen(port, () => {
  console.log(`HDGM listening on port ${port}`)
})
