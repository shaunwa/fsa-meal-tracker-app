import { Component, OnInit } from '@angular/core';
import { IngredientsService } from '../ingredients.service';
import { MealsService } from '../meals.service';
import { Ingredient, Meal } from '../types';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
	isLoadingMeals = true;
	meals: Meal[] = [];

	isLoadingIngredients = true;
	ingredients: Ingredient[] = [];

	constructor(
		private ingredientsService: IngredientsService,
		private mealsService: MealsService,
	) { }

	ngOnInit(): void {
		this.ingredientsService.getIngredients()
			.subscribe(ingredients => {
				this.ingredients = ingredients;
				this.isLoadingIngredients = false;
			});
		this.mealsService.getMeals()
			.subscribe(meals => {
				this.meals = meals;
				this.isLoadingMeals = false;
			});
	}

	// If you haven't already, you'll need to do this for testing: db.meals.insert({ recipeId: "123", plannedDate: new Date() })
	onDeleteMeal(mealId: string) {
		this.mealsService.deleteMeal(mealId)
			.subscribe(updatedMeals => this.meals = updatedMeals);
	}

	// If you haven't already, you'll need to do this for testing: db.ingredients.insert({ name: "Macaroni", amount: 2, units: "cups" })
	onDeleteIngredient(ingredientName: string) {
		this.ingredientsService.deleteIngredient(ingredientName)
			.subscribe(updatedIngredients => this.ingredients = updatedIngredients);
	}

}
