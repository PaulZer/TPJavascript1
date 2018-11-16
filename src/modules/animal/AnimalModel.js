const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AnimalModel = new Schema({

    name: {
        type: String,
        required: true,
        empty: false,
        trim: true
    },
    description: {
        type: String,
        required: true,
        empty: false,
        trim: true
    },
    linkWiki: {
        type: String,
        required: true,
        empty: false,
        trim: true
    },
    preys: [{
        type: Schema.Types.ObjectId,
        ref: 'Animal'
    }],
    predators: [{
        type: Schema.Types.ObjectId,
        ref: 'Animal'
    }],
    categories: [{
        type: Schema.Types.ObjectId,
        ref: 'AnimalCategory'
    }]
});

AnimalModel.statics.findByCategory = function(categoryId) {
    return this.find({categories: categoryId});
};

mongoose.model('Animal', AnimalModel);