import express, { static as static_m } from 'express'
const app = express()

// get the port from env variable
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5000

app.use(static_m('dist'))

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})

app.get('/health', (req, res) => {
  res.send('ok')
})