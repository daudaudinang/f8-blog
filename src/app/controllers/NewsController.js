class NewsController {
    // [GET] /news
    index(req, res) {
        res.render('pages/news');
    }

    // [GET] /news/:id
    detail(req, res) {
        res.send('detail');
    }
}

module.exports = new NewsController();