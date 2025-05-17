import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Meat, Meal, Drink } from '../models/product.model';

interface ProductsData {
    meats: Meat[];
    meals: Meal[];
    drinks: Drink[];
    popular: number[];
}

@Injectable({
    providedIn: 'root'
})
export class DataService {
    private productsData$: Observable<ProductsData>;

    constructor(private http: HttpClient) { 
        this.productsData$ = this.http.get<ProductsData>('../../assets/products.json')
    }

    getPopular(): Observable<number[]> {
        return this.productsData$.pipe(map(data => data.popular));
    }

    getMeat(): Observable<Meat[]> {
        return this.productsData$.pipe(map(data => data.meats));
    }

    getMeals(): Observable<Meal[]> {
        return this.productsData$.pipe(map(data => data.meals));
    }

    getDrinks(): Observable<Drink[]> {
        return this.productsData$.pipe(map(data => data.drinks));
    }
}