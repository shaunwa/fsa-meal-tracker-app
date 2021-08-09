import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from '../types';

const datesAreSameDay = (date1: Date, date2: Date): boolean => 
    date1.getFullYear() === date2.getFullYear()
        && date1.getMonth() === date2.getMonth()
        && date1.getDate() === date2.getDate();

@Component({
  selector: 'app-meals-list',
  templateUrl: './meals-list.component.html',
  styleUrls: ['./meals-list.component.css']
})
export class MealsListComponent implements OnInit {
	next7Days: Date[] = Array(7).fill(null).map((_, i) => {
		const date = new Date();
		date.setDate(date.getDate() + i);
		return date;
	});
	mealsForDays: (Meal | undefined)[] = [];

	@Input() isLoading: boolean = true;
	private _meals: Meal[] = [];
	@Input() set meals(value: Meal[]) {
		this._meals = value;
		this.mealsForDays = this.next7Days.map(day => this.meals.find(meal => datesAreSameDay(day, meal.plannedDate)));
	}; 
	get meals() { return this._meals; }


	@Output() deleteMeal = new EventEmitter<string>();

	constructor() { }

	ngOnInit(): void {
		console.log(this.next7Days);
		console.log(this.meals);
		console.log(this.mealsForDays);
	}

	onDelete(mealId: string): void {
		this.deleteMeal.emit(mealId);
	}

}
