const mainRouter = require('./main')
const siteRouter = require('./site')
const foodRouter = require('./food')

function route(app) {
    app.use('/test', mainRouter)
    app.use('/', siteRouter)
    app.use('/foods', foodRouter)

}

module.exports = route
