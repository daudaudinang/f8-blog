const path = require('path')
const express = require('express')
const morgan = require('morgan')
const { engine } = require('express-handlebars')
const routes = require('./routes')

const app = express()
const port = 3000

app.engine('hbs', engine({ extname: '.hbs' }))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources/views'))

// static file
app.use(express.static(path.join(__dirname, 'public')))

// parse body
app.use(express.urlencoded({ extended: true })) // handle form
app.use(express.json())

// logger
app.use(morgan('dev'))

// add router
routes(app)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
