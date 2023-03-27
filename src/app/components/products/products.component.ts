import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from 'src/app/mock-products';
import { Product } from 'src/app/models';
import { ProductsAndSuppliersService } from 'src/app/services/products-and-suppliers.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products!: Product[];

  constructor(private productService: ProductsAndSuppliersService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => this.products = products);
    
  }


}
