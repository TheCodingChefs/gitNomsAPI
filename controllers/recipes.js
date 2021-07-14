const express = require('express');
const router = express.Router();
const Recipe = require('../models/recipeSchema');

//INDEX //GET  //recipes
router.get('/', (req, res, next) => {
  // Your Recipe route login goes here
  Recipe.find()
    .then((recipes) => res.json(recipes))
    .catch(next);
});

//Show
// Get /recipes/:id
router.get('/:id', (req, res, next) => {
  const id = req.params.id
  Recipe.findById(id)
    .then((recipe) => res.json(recipe))
    .catch(next);
});


//Create
//Post /recipe
router.post('/', (req, res, next) => {
  const recipeData = req.body
  Recipe.create(recipeData)
    .then((recipe)=> res.status(201).json(recipe))
    .catch(next);
})


//Update
//Patch /recipe/:id
router.patch('/:id', (req, res, next) => {
  const id = req.params.id
  const recipeData = req.body
  Recipe.findOneAndUpdate({_id: id}, recipeData, {new:true})
    .then((recipe) => res.json(recipe))
    .catch(next);
});



//Delete
// /recipe/:id
router.delete('/:id', (req, res, next) => {
  const id = req.params.id
  Recipe.findOneAndDelete({_id: id})
    .then(() => res.sendStatus(204))
    .catch(next);
})