const router = require('express').Router();
const { Recipe , FavoriteRecipes } = require('../../models');

router.post('/', async (req, res) => {
    try {
        console.log(req.body)
        const newRecipe = await Recipe.create({
            ...req.body,
            userRecipe_id: req.session.user_id,
        });

        res.status(200).json(newRecipe);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const recipeData = await Recipe.destroy({
            where: {
                id: req.params.id,
            },
        });

        if (!recipeData) {
            res.status(404).json({ message: 'Recipe not found: ' + req.params.id });
            return;
        }

        res.status(200).json(recipeData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/favorites', async (req,res) => {
    try{
        const favoriteData = await FavoriteRecipes.create({
            recipe_name: req.body.recipe_name,
            userFavorite_id: req.session.user_id
        })
        console.log(favoriteData)
        res.status(200).json(favoriteData)

    }catch(err){
        res.status(500).json(err);
    }
})

module.exports = router;