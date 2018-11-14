const mongoose = require('mongoose');
const Product = mongoose.model('Product');
const PFs = require('./productFunctions');

class ProductMiddlewares {

    static loadProduitFromParams(req, res, next, productId) {

        PFs.getProductById(productId).then(function(product){
            req.data.product = product;
            next();
        }, err => next(err));
    }

    static afficherTouslesProduits(req, res, next) {
        Product.find({}, function (err, allProducts) {
            if (err) {
                return next(err);
            }
            res.send(allProducts);
        });
    }

    static afficherUnProduit(req, res) {
        if (!req.params.productId) {
            return next({
                message: "Produit inconnu."
            });
        }
        res.send(req.data.product);
    }

    static creerProduit(req, res, next) {
        const p = new Product({
            name: req.body.name,
            stock: req.body.stock,
            associe: req.body.associe
        });
        console.log("produit créé");

        p.save(function (err, productSaved) {
            if (err) {
                next(err);
            }
            res.send(productSaved);
        });
    }

    static mettreAJourUnProduit(req, res) {

    }

    static supprimerUnProduit(req, res, next) {
        console.log("produit supprimé");
        req.data.product.delete((err, infos) => {
            if(err) return next(err);
            res.send(infos);
        });
    }

}

module.exports = ProductMiddlewares;