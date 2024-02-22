const searchRouter = require('./search')
const homeRouter = require('./home')
const newsRouter = require('./news')

function routes(app) {
    app.use('/', homeRouter);

    app.use('/search', searchRouter)

    app.use('/news', newsRouter)
}

module.exports = routes