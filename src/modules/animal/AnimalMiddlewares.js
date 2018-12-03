const mongoose = require('mongoose');
const Animal = mongoose.model('Animal');
const _ = require('lodash');
const PFs = require('./AnimalFunctions');

class AnimalMiddlewares {

    static loadAnimalFromParams(req, res, next, animalId) {

        PFs.getAnimalById(animalId).then(function(animal){
            req.data.animal = animal;
            next();
        }, err => next(err));
    }

    static afficherTouslesAnimaux(req, res, next) {
        Animal.find({}, function (err, allAnimals) {
            if (err) {
                return next(err);
            }
            res.send(allAnimals);
        });
    }

    static afficherUnAnimal(req, res) {
        if (!req.params.animalId) {
            return next({
                message: "Animal inconnu."
            });
        }
        res.send(req.data.animal);
    }

    static creerAnimal(req, res, next) {
        const p = new Animal({
            name: req.body.name,
            description: req.body.description,
            linkWiki: req.body.linkWiki,
            categories: req.body.categories,
            preys: req.body.preys,
            predators: req.body.predators,
        });
        console.log("animal créé");

        p.save(function (err, animalSaved) {
            if (err) {
                next(err);
            }
            res.send(animalSaved);
        });
    }

    static mettreAJourUnAnimal(req, res, next) {
        console.log("Maj animal");
        req.data.animal = _.extend(req.data.animal, req.body);
        req.data.animal.save((err, animalUpdated) => {
           if(err){
               return next(err);
           } else res.send(animalUpdated);
        });
    }

    static supprimerUnAnimal(req, res, next) {
        console.log("animal supprimé");
        req.data.animal.delete((err, infos) => {
            if(err) return next(err);
            res.send(infos);
        });
    }

}

module.exports = AnimalMiddlewares;