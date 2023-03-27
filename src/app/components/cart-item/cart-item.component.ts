import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartItem, Product } from 'src/app/models';

@Component({
  selector: '[app-cart-item]',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Input() item!: any;
  @Output() increment = new EventEmitter(); 
  @Output() decrement = new EventEmitter(); 
  @Output() remove = new EventEmitter(); 

  constructor() { }

  ngOnInit(): void {
    // console.log(this.item);
  }

  onIncrement(product:Product){
    this.increment.emit(product);
  }
  onDecrement(product:Product){
    this.decrement.emit(product);
  }
  onRemove(product:Product){
    this.remove.emit(product);
  }

}
