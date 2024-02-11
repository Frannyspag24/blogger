var express = require('express');
var router = express.Router();
var ctrlBlog = require('../controllers/blog');

/* Setup routes to pages */
router.get('/', ctrlBlog.blog);
router.get('/blogList', ctrlBlog.blogList);
router.get('/blogAdd', ctrlBlog.blogAdd);

module.exports = router;
