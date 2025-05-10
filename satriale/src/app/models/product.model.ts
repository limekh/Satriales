export interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
    imageUrl?: string;
    isStock: boolean;
    nutritionValue: number[];
}

export interface Meat extends Product {
    meatSort: string;
    cutType: string;
    grade: string; 
    onBone: boolean;
}

export interface Meal extends Product {
    composition: string;
    weight: number;
    allergens: string;
}

export interface Drink extends Product {
    composition: string;
    type: string;
    volume: number;
    alcoholPercentage?: number;
    isCarbonated: boolean;
}

export type AnyProduct = Meat | Meal | Drink;