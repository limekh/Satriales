import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Meat, Meal, Drink, AnyProduct } from '../../models/product.model';
import { DataService } from '../../services/data.service';
import { ProductModalComponent } from '../../components/product-modal/product-modal.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, 
    MatButtonModule, 
    MatCardModule, 
    MatIconModule, 
    RouterModule,
    MatDialogModule
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  meatProducts: Meat[] = [];
  mealProducts: Meal[] = [];
  drinkProducts: Drink[] = [];
  popularProducts: (Meat | Meal | Drink)[] = [];

  constructor(
    private dataService: DataService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.meatProducts = this.dataService.getMeat();
    this.mealProducts = this.dataService.getMeals();
    this.drinkProducts = this.dataService.getDrinks();
    this.popularProducts = this.dataService.getPopular();
  }

  openProductModal(productId: number): void {
    const product = this.getProductById(productId);
    
    if (product) {
      this.dialog.open(ProductModalComponent, {
        width: '1000px',
        data: product
      });
    }
  }

  private getProductById(id: number): AnyProduct | undefined {
    const allProducts: AnyProduct[] = [
      ...this.meatProducts,
      ...this.mealProducts,
      ...this.drinkProducts
    ];
    return allProducts.find(p => p.id === id);
  }
}