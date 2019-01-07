Paul Bouchillou - Mini album d'animaux

###############

Certaines requêtes de modification et suppression nécessitent les headers suivants:

Content-Type: application/x-www-form-urlencoded
Authorization: tmlp

Les routes : 

	-	Liste de tous les animaux => GET http://localhost:3000/api/animal

	-	Supprimer un animal => DELETE http://localhost:3000/api/animal/[animalId]

	-	Créer un animal => POST http://localhost:3000/api/animal/
				x-www-form-url-encoded:
					name: [text]
					description: [text]
					linkWiki: [text]
					preys: [text]
					predators: [text]
					categories: [text]

	-	Liste des catégories => http://localhost:3000/api/category

	-	Liste des animaux d'une catégorie => http://localhost:3000/api/category/[categoryId]/animals

Note : j'avais continué et ajouté du style, des images et quelques routes
mais on dirait que j'ai oublié de push sur github :/
Je note cepandant les routes ici (qui ne sont pas dans le code)

	-	Ajouter un animal à une catégorie => PUT http://localhost:3000/api/category/[categoryId]/addAnimal
			x-www-form-url-encoded:
				animalId: [animalId]

	-	Supprimer un animal d'une catégorie => PUT http://localhost:3000/api/category/[categoryId]/removeAnimal
			x-www-form-url-encoded:
				animalId: [animalId]

	-	Modifier un animal => PUT http://localhost:3000/api/animal/[animalId]
			x-www-form-url-encoded:
					name: [text]
					description: [text]
					linkWiki: [text]
					preys: [text]
					predators: [text]
					categories: [text]
         
Bonne année !
