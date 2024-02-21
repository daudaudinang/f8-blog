class HomeController {
    // [GET] /
    index(req, res) {
        res.render('pages/home');
    }
}

module.exports = new HomeController();