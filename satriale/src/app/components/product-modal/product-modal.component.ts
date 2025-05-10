import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AnyProduct } from '../../models/product.model';
import { Meat, Meal, Drink } from '../../models/product.model';

@Component({
  selector: 'app-product-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.css']
})
export class ProductModalComponent {
  constructor(
    public dialogRef: MatDialogRef<ProductModalComponent>,
    @Inject(MAT_DIALOG_DATA) public product: AnyProduct
  ) {}

  close(): void {
    this.dialogRef.close();
  }

  isMeat(product: any): product is Meat {
    return 'meatSort' in product;
  }
  
  isMeal(product: any): product is Meal {
    return 'weight' in product;
  }
  
  isDrink(product: any): product is Drink {
    return 'volume' in product;
  }
}