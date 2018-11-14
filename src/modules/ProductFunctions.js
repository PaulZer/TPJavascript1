const mongoose = require('mongoose');
const Product = mongoose.model('Product');

class ProductFunctions{

    static loadProduitFromParams(req, res, next){
        req.data.produit = req.data.idProduit;
        next();
    }

    static afficherToutLesProduits(req, res){
        res.send("page de tous les produits");
    }

    static afficherUnProduitBy(req, res){
        res.send("page du produit id: " + req.data.produit);
    }

    static getProductById(productId) {
        return new Promise(function (resolve, reject){
            Product.find({"_id": productId}).populate("associe").exec(function(err, product){
                if(err){
                    reject(err);
                }
                resolve(product[0]);
            })
        })
    }
}

module.exports = ProductFunctions;