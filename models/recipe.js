const mongoose = require('../db/connections');

const recipeSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        ingredients: { type: String, required: true },
        directions: { type: String, required: true },
        cuisineType: { type: String, required: true },
        author: {type : String, default:'anonymous'},
        rating: {
            upvotes: Number,
            downvotes: Number
        }
    },
    {
        timestamps: true,
    }
);

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;