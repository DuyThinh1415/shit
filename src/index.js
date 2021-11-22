const path = require('path')
const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3000
const handlebars = require('express-handlebars')

const route = require('./routes')
const db = require('./config/db')

// Connect to DB
db.connect();

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({
    extended: true
}))

//HTTP logger
app.use(morgan('combined'))

//template engine
app.engine('hbs', handlebars({
    extname: '.hbs'
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources/views'))

//route init
route(app);

app.listen(port, () => {
    console.log(`Wep at ===> http://localhost:${port}`)
})