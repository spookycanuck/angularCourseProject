import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Test Recipe', 'a test recipe', 'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg'),
        new Recipe('2 Recipe', 'a test recipe', 'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg'),
      ];

    getRecipes() {
        return this.recipes.slice();
    }
}