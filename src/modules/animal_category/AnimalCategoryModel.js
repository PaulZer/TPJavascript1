const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AnimalCategoryModel = new Schema({
    name: {
        type: String,
        required: true,
        empty: false,
        trim: true
    }
});

mongoose.model('AnimalCategory', AnimalCategoryModel);