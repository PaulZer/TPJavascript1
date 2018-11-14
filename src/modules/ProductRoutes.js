const express = require('express');
const PMs = require('./ProductMiddlewares');
const AuthM = require('../AuthMiddleWares');
const productRouter = express.Router();

productRouter.param('productId', PMs.loadProduitFromParams);

// define the home page route
productRouter.route('/')
    .get(PMs.afficherTouslesProduits)
    .post(AuthM.hasValidAuthorizationToken, PMs.creerProduit);

productRouter.route('/:productId')
    .get(PMs.afficherUnProduit)
    .post(PMs.mettreAJourUnProduit)
    .delete(AuthM.hasValidAuthorizationToken, PMs.supprimerUnProduit);


module.exports = productRouter;