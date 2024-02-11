/* GET blog page. */
exports.blog = function (req, res) {
    res.render('blog', { title: 'Francesco Spagnolo Blog Site' });
};

/* GET blog list page. */
exports.blogList = function (req, res) {
    res.render('blogList', { title: 'Francesco Spagnolo Blog List Page' });
};

/* GET blog add page. */
exports.blogAdd = function (req, res) {
    res.render('blogAdd', { title: 'Francesco Spagnolo Blog Add Page' });
};