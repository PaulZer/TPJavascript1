const express = require('express');
const PMs = require('./AnimalMiddlewares');
const AuthM = require('../../AuthMiddlewares');
const animalRouter = express.Router();

animalRouter.param('animalId', PMs.loadAnimalFromParams);

// define the home page route
animalRouter.route('/')
    .get(PMs.afficherTouslesAnimaux)
    .post(AuthM.hasValidAuthorizationToken, PMs.creerAnimal);

animalRouter.route('/:animalId')
    .get(PMs.afficherUnAnimal)
    .post(AuthM.hasValidAuthorizationToken, PMs.mettreAJourUnAnimal)
    .delete(AuthM.hasValidAuthorizationToken, PMs.supprimerUnAnimal);


module.exports = animalRouter;