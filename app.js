// app.js
// eslint-disable-next-line no-undef
const express = require('express')
const static_m = express.static

const app = express()

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5000

app.get('/health', (req, res) => {
  res.status(200).send('ok')
})

app.use(static_m('dist'))

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})