import { Component, OnInit } from '@angular/core';
import { CartItem, Product } from 'src/app/models';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartItems!: CartItem[];
  total!: number;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getCartItems().subscribe(p => {
      this.cartItems = p
      this.getTotal();
    });
  }

  increment(product: Product){
    this.cartService.addItem(product);
  }
  decrement(product: Product){
    this.cartService.DecrementItem(product);
  }
  remove(product: Product){
    this.cartService.removeItem(product);
  }

  getTotal(){
    let total = 0;
    this.cartItems.map(cartItem => total += (cartItem.product.price * cartItem.quantity))
    this.total = total;
  }
  

}
