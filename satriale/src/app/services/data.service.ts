import { Injectable } from "@angular/core";
import { Meat, Meal, Drink } from '../models/product.model';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    private meats: Meat[] = [
        {
            id: 1001,
            name: "Pork Steak",
            category: "Meat",
            price: 25,
            imageUrl: "../../../assets/images/pog_steak.webp",
            isStock: true,
            nutritionValue: [205, 16, 16, 0],
            meatSort: "Pork",
            cutType: "Steak",
            grade: "Chilled"
        }, 
        {
            id: 1002,
            name: "Rib Eye Steak",
            category: "Meat",
            price: 25,
            imageUrl: "../../../assets/images/ribeye.jpg",
            isStock: true,
            nutritionValue: [205, 16, 16, 0],
            meatSort: "Beef",
            cutType: "Steak",
            grade: "Chilled"
        },
        {
            id: 1003,
            name: "Rib Eye Steak",
            category: "Meat",
            price: 25,
            imageUrl: "../../../assets/images/ribeye.jpg",
            isStock: true,
            nutritionValue: [205, 16, 16, 0],
            meatSort: "Beef",
            cutType: "Steak",
            grade: "Chilled"
        }
    ];
    private meals: Meal[] = [
        {
            id: 2001,
            name: "Gabagool",
            category: "Meal",
            price: 5,
            imageUrl: "../../../assets/images/Gabagool.jfif",
            isStock: true,
            nutritionValue: [205, 16, 16, 0],
            composition: "Hamburger, meat, bread",
            weight: 200,
            allergens: "glutens"
        }
    ];
    private drinks: Drink[] = [
        {
            id: 3001,
            name: "Cola",
            category: "Drink",
            price: 1.5,
            imageUrl: "../../../assets/images/cola.jpg",
            isStock: true,
            nutritionValue: [205, 0, 0, 50],
            composition: "Sugar",
            type: "limonade",
            volume: 500,
            isCarbonated: true
        }
    ];

    constructor(){ }

    getPopularProducts() {
        return [
            {   
                id: 1001,
                name: "Rib Eye Steak",
                category: "Meat",
                price: 25,
                isStock: true,
                nutritionValue: [205, 16, 16, 0],
                meatSort: "Beef",
                cutType: "Steak",
                grade: "Chilled" 
            },
            {
                id: 2001,
                name: "Gabagool",
                category: "Meal",
                price: 5,
                isStock: true,
                nutritionValue: [205, 16, 16, 0],
                composition: "Hamburger, meat, bread",
                weight: 200,
                allergens: "glutens"
            },
            {
                id: 3001,
                name: "Cola",
                category: "Drink",
                price: 3,
                isStock: true,
                nutritionValue: [205, 0, 0, 50],
                composition: "Sugar",
                type: "limonade",
                volume: 500,
                isCarbonated: true
            }
        ];
    }

    getMeat(): Meat[] {
        return this.meats;
    }

    getMeals(): Meal[] {
        return this.meals;
    }

    getDrinks(): Drink[] {
        return this.drinks;
    }

    getProductById(id: number) : Meat | Meal | Drink | undefined {
        const allProducts = [...this.meats, ...this.meals, ...this.drinks];
        return allProducts.find(product => product.id == id);
    }
}