var express = require('express')
var router = express.Router();
var cate = require('../controllers/CateController')

/** Test */
router.get('/', cate.getAll)

module.exports = router