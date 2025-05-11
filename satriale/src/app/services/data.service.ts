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
            price: 24.99,
            imageUrl: "../../../assets/images/pog_steak.webp",
            isStock: true,
            nutritionValue: [205, 16, 16, 0],
            meatSort: "Pork",
            cutType: "Steak",
            grade: "Chilled",
            onBone: false
        },
        {
            id: 1002,
            name: "Rib Chops",
            category: "Meat",
            price: 19.99,
            imageUrl: "../../../assets/images/ribchops.jpg",
            isStock: true,
            nutritionValue: [205, 16, 16, 0],
            meatSort: "Pork",
            cutType: "Steak",
            grade: "Chilled",
            onBone: true
        },
        {
            id: 1003,
            name: "Escalope",
            category: "Meat",
            price: 25.49,
            imageUrl: "../../../assets/images/escalope.webp",
            isStock: true,
            nutritionValue: [205, 16, 16, 0],
            meatSort: "Pork",
            cutType: "Steak",
            grade: "Chilled",
            onBone: false
        }
    ];
    private meals: Meal[] = [
        {
            id: 2001,
            name: "Gabagool",
            category: "Meal",
            price: 5,
            imageUrl: "../../../assets/images/gabagool.png",
            isStock: true,
            nutritionValue: [205, 16, 16, 0],
            composition: "Hamburger, meat, bread",
            weight: 200,
            allergens: "glutens"
        },
        {
            id: 2002,
            name: "Porchetta",
            category: "Meal",
            price: 6,
            imageUrl: "../../../assets/images/porchetta.jpg",
            isStock: true,
            nutritionValue: [205, 16, 16, 0],
            composition: "Pork, rosemary, garlic, pepper",
            weight: 200,
            allergens: "No"
        },
        {
            id: 2003,
            name: "Panozzo",
            category: "Meal",
            price: 4.1,
            imageUrl: "../../../assets/images/panozzo.webp",
            isStock: true,
            nutritionValue: [205, 16, 16, 0],
            composition: "Parma ham, arugula, mozzarella, cherry tomatoes",
            weight: 200,
            allergens: "glutens"
        }
    ];
    private drinks: Drink[] = [
        {
            id: 3001,
            name: "Cola 0.5l",
            category: "Drink",
            price: 1.5,
            imageUrl: "../../../assets/images/cola.jpg",
            isStock: true,
            nutritionValue: [205, 0, 0, 50],
            composition: "Sugar",
            type: "Lemonade",
            volume: 500,
            isCarbonated: true
        },
        {
            id: 3002,
            name: "Sprite 0.5l",
            category: "Drink",
            price: 1.5,
            imageUrl: "../../../assets/images/sprite.jpg",
            isStock: true,
            nutritionValue: [205, 0, 0, 50],
            composition: "Sugar",
            type: "Lemonade",
            volume: 500,
            isCarbonated: true
        },
        {
            id: 3003,
            name: "Fanta 0.5l",
            category: "Drink",
            price: 1.5,
            imageUrl: "../../../assets/images/fanta.jpg",
            isStock: true,
            nutritionValue: [205, 0, 0, 50],
            composition: "Sugar",
            type: "Lemonade",
            volume: 500,
            isCarbonated: true
        }
    ];

    private popular: number[] = [ 1001, 2003, 3002 ];

    constructor() { }

    getPopular(): number[] {
        return this.popular;
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
}