const express = require('express');
const ACMs = require('./AnimalCategoryMiddlewares');
const AuthM = require('../../AuthMiddlewares');
const animalCategoryRouter = express.Router();

animalCategoryRouter.param('categoryId', ACMs.loadCategoryFromParams);

// define the home page route
animalCategoryRouter.route('/')
    .get(ACMs.getAllCategories)
    .post(AuthM.hasValidAuthorizationToken, ACMs.createCategory);

animalCategoryRouter.route('/:categoryId/addAnimal')
    .post(AuthM.hasValidAuthorizationToken, ACMs.addAnimalToCategory);

animalCategoryRouter.route('/:categoryId/animals')
    .get(ACMs.getCategoryAnimals)
    .post(AuthM.hasValidAuthorizationToken, ACMs.updateCategory)
    .delete(AuthM.hasValidAuthorizationToken, ACMs.deleteCategory);


module.exports = animalCategoryRouter;