const mongoose = require('../db/connections');

const recipeSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        ingredients: { type: String, required: true },
        directions: { type: String, required: true },
        cuisineType: { type: String, required: true },
        author: {type : String, required: true},
        allergens: { type: String, default: ''},
        rating: {
            upvotes: { type: Number, default: 0 },
            downvotes: { type: Number, default: 0 }
        }
    },
    {
        timestamps: true,
    }
);

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;