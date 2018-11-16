const express = require('express');
const router = express.Router();

router.use('/animal', require('./modules/animal/AnimalRoutes'));
router.use('/category', require('./modules/animal_category/AnimalCategoryRoutes'));

router.route('/')
    .get(function (req, res) {
        res.send('root');
    });

module.exports = router;