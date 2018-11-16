const mongoose = require('mongoose');
const Animal = mongoose.model('Animal');

class AnimalFunctions{

    static getAnimalById(animalId) {
        return new Promise(function (resolve, reject){
            Animal.find({"_id": animalId}).populate("associe").exec(function(err, animal){
                if(err){
                    reject(err);
                }
                resolve(animal[0]);
            });
        });
    }
}

module.exports = AnimalFunctions;