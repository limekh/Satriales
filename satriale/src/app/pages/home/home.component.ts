import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Meat, Meal, Drink } from '../../models/product.model';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule, MatIconModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  meatProducts: Meat[] = [];
  mealProducts: Meal[] = [];
  drinkProducts: Drink[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.meatProducts = this.dataService.getMeat();
    this.mealProducts = this.dataService.getMeals();
    this.drinkProducts = this.dataService.getDrinks();
  }
}