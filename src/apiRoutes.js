const express = require('express');
const router = express.Router();

router.use('/product', require('./modules/ProductRoutes'));

router.route('/')
    .get(function (req, res) {
        res.send('root');
    });

module.exports = router;