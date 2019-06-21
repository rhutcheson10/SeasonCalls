import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class CartService {
  constructor(
    private http: HttpClient
  ) {}
  items = [];
 addToCart(callproducts) {
    this.items.push(callproducts);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
    getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }
 
  


 
}