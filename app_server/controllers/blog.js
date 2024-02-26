/* GET blog page. */
exports.blog = function (req, res) {
    res.render('blog', { title: 'Francesco Spagnolo Blog Site' });
};

/* GET blog list page. */
exports.blogList = function (req, res) {
    res.render('blogList', {
        title: 'Francesco Spagnolo Blog List Page',
        pageHeader: {
            title: 'Blogs',
            strapline: 'A listing of multiple blogs.'
        },
        blog: [{
            blogTitle: 'Test1',
            blogText: 'Testing 1'
        }, {
            blogTitle: 'Test2',
            blogText: 'Testing 2'
        }, {
            blogTitle: 'Test3',
            blogText: 'Testing 3'
        }]
    });
};

/* GET blog add page. */
exports.blogAdd = function (req, res) {
    res.render('blogAdd', { title: 'Francesco Spagnolo Blog Add Page' });
};

/* GET blog edit page. */
exports.blogEdit = function (req, res) {
    res.render('blogEdit', { title: 'Francesco Spagnolo Blog Edit Page' });
};

/* GET blog add page. */
exports.blogDelete = function (req, res) {
    res.render('blogDelete', { title: 'Francesco Spagnolo Blog Delete Page' });
};