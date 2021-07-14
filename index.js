// CONFIG
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 4000;

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Redirect
app.get('/', (req, res) => {
    res.redirect('/recipes')
});

// Route for recipe
const recipeController = require ('./controllers/recipes.js');
app.use('/recipes', recipeController);

// START SERVER
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});