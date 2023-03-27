import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartItem, Product } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private temp: CartItem[] = [];
  cartItems = new BehaviorSubject<CartItem[]>([]);
  private ls!:CartItem[];
  private lsExists!:Boolean;

  constructor() {
    this.#getLs();


    if(this.lsExists){
      this.cartItems.next(this.ls);
    }
  }

  addItem(product:Product, quantity:number = 1){
    this.#getLs();

    let exist = this.#checkIfExists(product);

    if(exist){
      exist.quantity += quantity;
      localStorage.setItem('cart', JSON.stringify(this.ls));
      this.cartItems.next(JSON.parse(localStorage.getItem('cart') || '[]'));
    } else {
      if(this.lsExists){
        const newData = [...this.ls, {product: product, quantity: quantity}];
        localStorage.setItem('cart', JSON.stringify(newData));
        this.cartItems.next(JSON.parse(localStorage.getItem('cart') || '[]'));
      } else {
        this.temp.push({product: product, quantity: quantity});
        localStorage.setItem('cart', JSON.stringify(this.temp));
        this.cartItems.next(this.temp);
      }
    }

  }

  DecrementItem(product:Product, quantity:number = 1){
    this.#getLs();

    let exist = this.#checkIfExists(product);

    if(exist){
      if(exist.quantity>1){
        exist.quantity -= quantity;
        localStorage.setItem('cart', JSON.stringify(this.ls));
        this.cartItems.next(JSON.parse(localStorage.getItem('cart') || '[]'))
      } else{
        this.removeItem(product);
      }
      
    }
  }

  removeItem(product: Product){
    this.#getLs();

    if(this.#checkIfExists(product)){
      this.ls = this.ls.filter((item) => item.product.id !== product.id);
      localStorage.setItem('cart', JSON.stringify(this.ls));
      this.cartItems.next(JSON.parse(localStorage.getItem('cart') || '[]'));
    }
    
    


  }

  getCartItems(): Observable<CartItem[]>{
    return this.cartItems.asObservable();
  }

  #checkIfExists(product:Product){
    let exist: CartItem | undefined;

    if(this.lsExists){
      return this.ls.find((item) => item.product.id === product.id)
    }
    return false;
  }

  #getLs(){
    this.ls = JSON.parse(localStorage.getItem('cart') || '{}');
    this.lsExists = Object.keys(this.ls).length!==0;
  }
}

