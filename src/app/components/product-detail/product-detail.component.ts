import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product, Supplier } from 'src/app/models';
import { CartService } from 'src/app/services/cart.service';
import { ProductsAndSuppliersService } from 'src/app/services/products-and-suppliers.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product!: Product;
  supplier!: Supplier;
  qntForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsAndSuppliersService,
    private cartService: CartService,
    private fb: FormBuilder,) { }

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id') || '{}');
    this.productService.getProductById(id).subscribe((product) => {
      this.product = product;
      this.productService.getSupplierById(product.supplierId).subscribe(supplier => this.supplier = supplier);
    } );

    this.qntForm = this.fb.group({
      quantity: [1,[
        Validators.min(1),
        Validators.required
      ]],
    })
    
  }

  get quantity(){
    return this.qntForm.get('quantity');
  }

  addToCart(product:Product, quantity:number){
    if(quantity === null) quantity=1;
    this.cartService.addItem(product, quantity);
  }

}
