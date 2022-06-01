import { Injectable } from "@angular/core";

import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()

export class RecipeService {

  private recipes: Recipe[] = [
        new Recipe('A Tasty Schnitzel', 'v good. much wow', 'https://simply-delicious-food.com/wp-content/uploads/2019/09/Chicken-schnitzel-1-500x500.jpg',
        [
            new Ingredient('Meat',1),
            new Ingredient('French Fries',20)
        ]),
        new Recipe('A Burger', 'yum. v good too.', 'https://recipe-graphics.grocerywebsite.com/0_GraphicsRecipes/4589_4k.jpg',
        [
            new Ingredient('Buns',2),
            new Ingredient('Meat',1)
        ]),
      ];

    constructor(private slService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
      return this.recipes.slice()[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}
