class NewsController {
    // [GET] /search
    index(req, res) {
        res.render('pages/search', {
            helpers: {
                renderSearchValue() {
                    return req.query.q
                },
            },
        })
    }

    // [POST] /search
    indexPost(req, res) {
        console.log(req.body)
        res.send('')
    }
}

module.exports = new NewsController()
