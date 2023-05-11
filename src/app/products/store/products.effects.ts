import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { FETCH_PRODUCTS, SetProducts } from './products.actions';
import { AppState } from '../../store/app.reducer';
import { switchMap, map } from 'rxjs';
import { Product } from '../product.model';

@Injectable()
export class ProductsEffects {
  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private store: Store<AppState>
  ) {}

  fetchProducts = createEffect(() => {
    return this.actions$.pipe(
      ofType(FETCH_PRODUCTS),
      switchMap(() => {
        console.log('fetching...')
        return this.http.get<Product[]>(
          'https://fakestoreapi.com/products'
        )
      }),
      map((products: Product[]) => {
        return products.map(product => product)
      }),
      map((products: Product[]) => {
        return new SetProducts(products)
      })
    )
  })
}
