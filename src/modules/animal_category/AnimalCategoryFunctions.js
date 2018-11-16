const mongoose = require('mongoose');
const AnimalCategory = mongoose.model('AnimalCategory');

class AnimalCategoryFunctions{

    static getCategoryById(categoryId){
        return new Promise(function (resolve, reject){
            AnimalCategory.find({"_id": categoryId}).populate("animals").exec(function(err, category){
                if(err){
                    reject(err);
                }
                resolve(category[0]);
            })
        });
    }
}

module.exports = AnimalCategoryFunctions;