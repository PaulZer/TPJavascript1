const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductModel = new Schema({

    name: {
        type: String,
        required: true,
        empty: false,
        trim: true
    },
    stock: {
        type: String,
        required: true,
        empty: false,
    },
    associe: {
        type: Schema.Types.ObjectId,
        ref: 'Product'
    },
    creationDate: {
        type: Date,
        default: Date.now()
    },
    livraisonDate: {
        type: Date,
        default: Date.now()
    }
});

mongoose.model('Product', ProductModel);