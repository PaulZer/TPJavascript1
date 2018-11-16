const mongoose = require('mongoose');
const AnimalCategory = mongoose.model('AnimalCategory');
const Animal = mongoose.model('Animal');
const _ = require('lodash');
const ACFs = require('./AnimalCategoryFunctions');

class AnimalCategoryMiddlewares {

    static loadCategoryFromParams(req, res, next, categoryId) {
        ACFs.getCategoryById(categoryId).then(function(category){
            req.data.category = category;
            next();
        }, err => next(err));
    }



    static getAllCategories(req, res, next) {
        AnimalCategory.find({}, function (err, allAnimalCategories) {
            if (err) {
                return next(err);
            }
            res.send(allAnimalCategories);
        });
    }

    static getCategoryAnimals(req, res) {
        if (!req.params.categoryId) {
            return next({
                message: "catégorie inconnue."
            });
        }
        Animal.find({
                "categories": req.params.categoryId
        }, function (err, animals) {
            if (err) {
                return next(err);
            }
            res.send({
                animals: animals,
                category: req.data.category
            });
        });
    }

    static createCategory(req, res, next) {
        const p = new AnimalCategory({
            name: req.body.name
        });
        console.log("catégorie créée");

        p.save(function (err, categorySaved) {
            if (err) {
                next(err);
            }
            res.send(categorySaved);
        });
    }

    static updateCategory(req, res, next) {
        console.log("catégorie mise à jour");
        req.data.category = _.extend(req.data.category, req.body);
        req.data.category.save((err, categoryUpdated) => {
            if(err){
                return next(err);
            } else res.send(categoryUpdated);
        });
    }

    static deleteCategory(req, res, next) {
        console.log("catégorie supprimée");
        req.data.category.delete((err, infos) => {
            if(err) return next(err);
            res.send(infos);
        });
    }

    static addAnimalToCategory(req, res, next) {
        console.log("ajout animal");
        let animalId = req.body.animalId;
        let animal = Animal.find({"_id": animalId}, (err, animals) => {
            if(err) return next(err);
            var animal = animals[0];
            animal.categories.push(req.data.category);
            animal.save((err, animalUpdated) => {
                if(err){
                    return next(err);
                } else res.send(animalUpdated);
            });
        });
    }
}

module.exports = AnimalCategoryMiddlewares;