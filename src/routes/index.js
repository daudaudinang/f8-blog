const searchRouter = require('./searchRouter')
const homeRouter = require('./homeRouter')
const newsRouter = require('./newsRouter')

function routes(app) {
    app.use('/', homeRouter);

    app.use('/search', searchRouter)

    app.use('/news', newsRouter)
}

module.exports = routes